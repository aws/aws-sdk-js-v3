import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateActivity } from "../model/CreateActivity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateActivityInput } from "../types/CreateActivityInput";
import { CreateActivityOutput } from "../types/CreateActivityOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/CreateActivityInput";
export * from "../types/CreateActivityOutput";
export * from "../types/CreateActivityExceptionsUnion";

export class CreateActivityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateActivityInput,
      OutputTypesUnion,
      CreateActivityOutput,
      SFNResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateActivity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateActivityInput,
    CreateActivityOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateActivityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateActivityInput, CreateActivityOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateActivityInput, CreateActivityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
