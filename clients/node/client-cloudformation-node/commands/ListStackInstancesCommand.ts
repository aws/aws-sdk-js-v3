import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListStackInstances } from "../model/operations/ListStackInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStackInstancesInput } from "../types/ListStackInstancesInput";
import { ListStackInstancesOutput } from "../types/ListStackInstancesOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ListStackInstancesInput";
export * from "../types/ListStackInstancesOutput";
export * from "../types/ListStackInstancesExceptionsUnion";

export class ListStackInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStackInstancesInput,
      OutputTypesUnion,
      ListStackInstancesOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListStackInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStackInstancesInput,
    ListStackInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListStackInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListStackInstancesInput,
    ListStackInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListStackInstancesInput, ListStackInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
