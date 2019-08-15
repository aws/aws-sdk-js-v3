import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateUserHierarchy } from "../model/operations/UpdateUserHierarchy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserHierarchyInput } from "../types/UpdateUserHierarchyInput";
import { UpdateUserHierarchyOutput } from "../types/UpdateUserHierarchyOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/UpdateUserHierarchyInput";
export * from "../types/UpdateUserHierarchyOutput";
export * from "../types/UpdateUserHierarchyExceptionsUnion";

export class UpdateUserHierarchyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserHierarchyInput,
      OutputTypesUnion,
      UpdateUserHierarchyOutput,
      ConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateUserHierarchy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserHierarchyInput,
    UpdateUserHierarchyOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateUserHierarchyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateUserHierarchyInput,
    UpdateUserHierarchyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUserHierarchyInput, UpdateUserHierarchyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
