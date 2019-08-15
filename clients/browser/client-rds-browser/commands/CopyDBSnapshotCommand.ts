import * as __aws_sdk_middleware_rds_presignedurl from "@aws-sdk/middleware-rds-presignedurl";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CopyDBSnapshot } from "../model/operations/CopyDBSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyDBSnapshotInput } from "../types/CopyDBSnapshotInput";
import { CopyDBSnapshotOutput } from "../types/CopyDBSnapshotOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CopyDBSnapshotInput";
export * from "../types/CopyDBSnapshotOutput";
export * from "../types/CopyDBSnapshotExceptionsUnion";

export class CopyDBSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyDBSnapshotInput,
      OutputTypesUnion,
      CopyDBSnapshotOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = CopyDBSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyDBSnapshotInput,
    CopyDBSnapshotOutput,
    Blob
  >();

  constructor(readonly input: CopyDBSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<CopyDBSnapshotInput, CopyDBSnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_middleware_rds_presignedurl.buildCrossRegionPresignedUrl({
        sourceIdentifierKey: "SourceDBSnapshotIdentifier",
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
      handler<CopyDBSnapshotInput, CopyDBSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
