import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutPublicAccessBlock } from "../model/operations/PutPublicAccessBlock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPublicAccessBlockInput } from "../types/PutPublicAccessBlockInput";
import { PutPublicAccessBlockOutput } from "../types/PutPublicAccessBlockOutput";
import { S3ControlResolvedConfiguration } from "../S3ControlConfiguration";
export * from "../types/PutPublicAccessBlockInput";
export * from "../types/PutPublicAccessBlockOutput";
export * from "../types/PutPublicAccessBlockExceptionsUnion";

export class PutPublicAccessBlockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutPublicAccessBlockInput,
      OutputTypesUnion,
      PutPublicAccessBlockOutput,
      S3ControlResolvedConfiguration,
      Blob
    > {
  readonly model = PutPublicAccessBlock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPublicAccessBlockInput,
    PutPublicAccessBlockOutput,
    Blob
  >();

  constructor(readonly input: PutPublicAccessBlockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ControlResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutPublicAccessBlockInput,
    PutPublicAccessBlockOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutPublicAccessBlockInput, PutPublicAccessBlockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
