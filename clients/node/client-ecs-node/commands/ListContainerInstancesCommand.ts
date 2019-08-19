import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListContainerInstances } from "../model/operations/ListContainerInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListContainerInstancesInput } from "../types/ListContainerInstancesInput";
import { ListContainerInstancesOutput } from "../types/ListContainerInstancesOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/ListContainerInstancesInput";
export * from "../types/ListContainerInstancesOutput";
export * from "../types/ListContainerInstancesExceptionsUnion";

export class ListContainerInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListContainerInstancesInput,
      OutputTypesUnion,
      ListContainerInstancesOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListContainerInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListContainerInstancesInput,
    ListContainerInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListContainerInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListContainerInstancesInput,
    ListContainerInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListContainerInstancesInput, ListContainerInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
