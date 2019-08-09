import * as __aws_sdk_middleware_rds_presignedurl from "@aws-sdk/middleware-rds-presignedurl";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CopyDBClusterSnapshot } from "../model/CopyDBClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyDBClusterSnapshotInput } from "../types/CopyDBClusterSnapshotInput";
import { CopyDBClusterSnapshotOutput } from "../types/CopyDBClusterSnapshotOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CopyDBClusterSnapshotInput";
export * from "../types/CopyDBClusterSnapshotOutput";
export * from "../types/CopyDBClusterSnapshotExceptionsUnion";

export class CopyDBClusterSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyDBClusterSnapshotInput,
      OutputTypesUnion,
      CopyDBClusterSnapshotOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CopyDBClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyDBClusterSnapshotInput,
    CopyDBClusterSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: CopyDBClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CopyDBClusterSnapshotInput,
    CopyDBClusterSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_middleware_rds_presignedurl.buildCrossRegionPresignedUrl({
        sourceIdentifierKey: "SourceDBClusterSnapshotIdentifier",
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
      handler<CopyDBClusterSnapshotInput, CopyDBClusterSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
