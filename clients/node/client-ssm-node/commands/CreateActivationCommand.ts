import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateActivation } from "../model/operations/CreateActivation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateActivationInput } from "../types/CreateActivationInput";
import { CreateActivationOutput } from "../types/CreateActivationOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/CreateActivationInput";
export * from "../types/CreateActivationOutput";
export * from "../types/CreateActivationExceptionsUnion";

export class CreateActivationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateActivationInput,
      OutputTypesUnion,
      CreateActivationOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateActivation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateActivationInput,
    CreateActivationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateActivationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateActivationInput, CreateActivationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateActivationInput, CreateActivationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
