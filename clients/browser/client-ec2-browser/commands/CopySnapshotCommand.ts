import * as __aws_sdk_middleware_ec2_copysnapshot from "@aws-sdk/middleware-ec2-copysnapshot";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CopySnapshot } from "../model/CopySnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopySnapshotInput } from "../types/CopySnapshotInput";
import { CopySnapshotOutput } from "../types/CopySnapshotOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CopySnapshotInput";
export * from "../types/CopySnapshotOutput";
export * from "../types/CopySnapshotExceptionsUnion";

export class CopySnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopySnapshotInput,
      OutputTypesUnion,
      CopySnapshotOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CopySnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopySnapshotInput,
    CopySnapshotOutput,
    Blob
  >();

  constructor(readonly input: CopySnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CopySnapshotInput, CopySnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_middleware_ec2_copysnapshot.addPresignedUrl({
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
        tags: { PRESIGNED_URL: true, DESTINATION_REGION: true }
      }
    );
    return stack.resolve(
      handler<CopySnapshotInput, CopySnapshotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
