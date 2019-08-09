import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDeployments } from "../model/ListDeployments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeploymentsInput } from "../types/ListDeploymentsInput";
import { ListDeploymentsOutput } from "../types/ListDeploymentsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListDeploymentsInput";
export * from "../types/ListDeploymentsOutput";
export * from "../types/ListDeploymentsExceptionsUnion";

export class ListDeploymentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeploymentsInput,
      OutputTypesUnion,
      ListDeploymentsOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListDeployments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeploymentsInput,
    ListDeploymentsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListDeploymentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDeploymentsInput, ListDeploymentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeploymentsInput, ListDeploymentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
