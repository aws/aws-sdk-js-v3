import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateActionTarget } from "../model/CreateActionTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateActionTargetInput } from "../types/CreateActionTargetInput";
import { CreateActionTargetOutput } from "../types/CreateActionTargetOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/CreateActionTargetInput";
export * from "../types/CreateActionTargetOutput";
export * from "../types/CreateActionTargetExceptionsUnion";

export class CreateActionTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateActionTargetInput,
      OutputTypesUnion,
      CreateActionTargetOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateActionTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateActionTargetInput,
    CreateActionTargetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateActionTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateActionTargetInput,
    CreateActionTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateActionTargetInput, CreateActionTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
