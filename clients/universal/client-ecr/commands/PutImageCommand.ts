import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutImage } from "../model/PutImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutImageInput } from "../types/PutImageInput";
import { PutImageOutput } from "../types/PutImageOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/PutImageInput";
export * from "../types/PutImageOutput";
export * from "../types/PutImageExceptionsUnion";

export class PutImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutImageInput,
      OutputTypesUnion,
      PutImageOutput,
      ECRResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutImageInput,
    PutImageOutput,
    Uint8Array
  >();

  constructor(readonly input: PutImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<PutImageInput, PutImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutImageInput, PutImageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
