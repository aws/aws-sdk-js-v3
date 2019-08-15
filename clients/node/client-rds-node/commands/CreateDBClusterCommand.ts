import * as __aws_sdk_middleware_rds_presignedurl from "@aws-sdk/middleware-rds-presignedurl";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDBCluster } from "../model/operations/CreateDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBClusterInput } from "../types/CreateDBClusterInput";
import { CreateDBClusterOutput } from "../types/CreateDBClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateDBClusterInput";
export * from "../types/CreateDBClusterOutput";
export * from "../types/CreateDBClusterExceptionsUnion";

export class CreateDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBClusterInput,
      OutputTypesUnion,
      CreateDBClusterOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBClusterInput,
    CreateDBClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDBClusterInput, CreateDBClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_middleware_rds_presignedurl.buildCrossRegionPresignedUrl({
        sourceIdentifierKey: "ReplicationSourceIdentifier",
        region: configuration.region,
        credentials: configuration.credentials,
        endpoint: configuration.endpoint,
        base64Encoder: configuration.base64Encoder,
        utf8Decoder: configuration.utf8Decoder,
        sha256: configuration.sha256
      }),
      {
        step: "initialize",
        priority: 0,
        tags: { PRESIGNED_URL: true }
      }
    );
    return stack.resolve(
      handler<CreateDBClusterInput, CreateDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
