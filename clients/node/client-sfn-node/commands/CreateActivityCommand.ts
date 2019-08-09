import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = CreateActivity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateActivityInput,
    CreateActivityOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateActivityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
