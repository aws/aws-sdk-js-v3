import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteParameterGroup } from "../model/DeleteParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteParameterGroupInput } from "../types/DeleteParameterGroupInput";
import { DeleteParameterGroupOutput } from "../types/DeleteParameterGroupOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/DeleteParameterGroupInput";
export * from "../types/DeleteParameterGroupOutput";
export * from "../types/DeleteParameterGroupExceptionsUnion";

export class DeleteParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteParameterGroupInput,
      OutputTypesUnion,
      DeleteParameterGroupOutput,
      DAXResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteParameterGroupInput,
    DeleteParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteParameterGroupInput,
    DeleteParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteParameterGroupInput, DeleteParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
