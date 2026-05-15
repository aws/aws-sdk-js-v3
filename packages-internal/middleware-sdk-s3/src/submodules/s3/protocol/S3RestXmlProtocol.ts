import { AwsRestXmlProtocol } from "@aws-sdk/core/protocols";
import { NormalizedSchema } from "@smithy/core/schema";
import type {
  EndpointBearer,
  HandlerExecutionContext,
  HttpRequest,
  OperationSchema,
  SerdeFunctions,
  StaticStructureSchema,
} from "@smithy/types";

/**
 * Customization for S3 backwards compatibility.
 *
 * In the S3 model, Bucket is considered an HTTP label, and we normally perform http label client
 * side validation. However, the standard validation is that the http label appears in
 * the request path. Bucket is unique in that it is an endpoint context param. It appears
 * where the endpoint resolver decides, rather than in the URL path (although sometimes it does appear there).
 *
 * For consistency with older code generated clients, we throw the HTTP label validation
 * error when the Bucket input is missing, if-and-only-if it is an httpLabel and is a required top level member.
 *
 * This does not apply to S3 Control.
 *
 * @internal
 */
export class S3RestXmlProtocol extends AwsRestXmlProtocol {
  public async serializeRequest<Input extends object>(
    operationSchema: OperationSchema,
    input: Input,
    context: HandlerExecutionContext & SerdeFunctions & EndpointBearer
  ): Promise<HttpRequest> {
    const request = await super.serializeRequest(operationSchema, input, context);
    const ns = NormalizedSchema.of(operationSchema.input);
    const staticStructureSchema = ns.getSchema() as StaticStructureSchema;

    let bucketMemberIndex = 0;
    const requiredMemberCount = staticStructureSchema[6] ?? 0;

    if (input && typeof input === "object") {
      for (const [memberName, memberNs] of ns.structIterator()) {
        if (++bucketMemberIndex > requiredMemberCount) {
          break;
        }
        if (memberName === "Bucket") {
          if (!(input as any).Bucket && memberNs.getMergedTraits().httpLabel) {
            throw new Error(`No value provided for input HTTP label: Bucket.`);
          }
          break;
        }
      }
    }

    return request;
  }
}
