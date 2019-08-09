import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDBParameterGroup } from "../model/CreateDBParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBParameterGroupInput } from "../types/CreateDBParameterGroupInput";
import { CreateDBParameterGroupOutput } from "../types/CreateDBParameterGroupOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/CreateDBParameterGroupInput";
export * from "../types/CreateDBParameterGroupOutput";
export * from "../types/CreateDBParameterGroupExceptionsUnion";

export class CreateDBParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBParameterGroupInput,
      OutputTypesUnion,
      CreateDBParameterGroupOutput,
      NeptuneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDBParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBParameterGroupInput,
    CreateDBParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDBParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDBParameterGroupInput,
    CreateDBParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDBParameterGroupInput, CreateDBParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
