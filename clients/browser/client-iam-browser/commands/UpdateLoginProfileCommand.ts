import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateLoginProfile } from "../model/operations/UpdateLoginProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateLoginProfileInput } from "../types/UpdateLoginProfileInput";
import { UpdateLoginProfileOutput } from "../types/UpdateLoginProfileOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateLoginProfileInput";
export * from "../types/UpdateLoginProfileOutput";
export * from "../types/UpdateLoginProfileExceptionsUnion";

export class UpdateLoginProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateLoginProfileInput,
      OutputTypesUnion,
      UpdateLoginProfileOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateLoginProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLoginProfileInput,
    UpdateLoginProfileOutput,
    Blob
  >();

  constructor(readonly input: UpdateLoginProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateLoginProfileInput,
    UpdateLoginProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateLoginProfileInput, UpdateLoginProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
