import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPublicAccessBlock } from "../model/GetPublicAccessBlock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPublicAccessBlockInput } from "../types/GetPublicAccessBlockInput";
import { GetPublicAccessBlockOutput } from "../types/GetPublicAccessBlockOutput";
import { S3ControlResolvedConfiguration } from "../S3ControlConfiguration";
export * from "../types/GetPublicAccessBlockInput";
export * from "../types/GetPublicAccessBlockOutput";
export * from "../types/GetPublicAccessBlockExceptionsUnion";

export class GetPublicAccessBlockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPublicAccessBlockInput,
      OutputTypesUnion,
      GetPublicAccessBlockOutput,
      S3ControlResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetPublicAccessBlock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPublicAccessBlockInput,
    GetPublicAccessBlockOutput,
    Uint8Array
  >();

  constructor(readonly input: GetPublicAccessBlockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: S3ControlResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPublicAccessBlockInput,
    GetPublicAccessBlockOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPublicAccessBlockInput, GetPublicAccessBlockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
