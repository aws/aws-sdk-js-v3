import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListOnPremisesInstances } from "../model/operations/ListOnPremisesInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOnPremisesInstancesInput } from "../types/ListOnPremisesInstancesInput";
import { ListOnPremisesInstancesOutput } from "../types/ListOnPremisesInstancesOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/ListOnPremisesInstancesInput";
export * from "../types/ListOnPremisesInstancesOutput";
export * from "../types/ListOnPremisesInstancesExceptionsUnion";

export class ListOnPremisesInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOnPremisesInstancesInput,
      OutputTypesUnion,
      ListOnPremisesInstancesOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListOnPremisesInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOnPremisesInstancesInput,
    ListOnPremisesInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListOnPremisesInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListOnPremisesInstancesInput,
    ListOnPremisesInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOnPremisesInstancesInput, ListOnPremisesInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
