import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBranches } from "../model/ListBranches";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBranchesInput } from "../types/ListBranchesInput";
import { ListBranchesOutput } from "../types/ListBranchesOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/ListBranchesInput";
export * from "../types/ListBranchesOutput";
export * from "../types/ListBranchesExceptionsUnion";

export class ListBranchesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBranchesInput,
      OutputTypesUnion,
      ListBranchesOutput,
      AmplifyResolvedConfiguration,
      Blob
    > {
  readonly model = ListBranches;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBranchesInput,
    ListBranchesOutput,
    Blob
  >();

  constructor(readonly input: ListBranchesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBranchesInput, ListBranchesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBranchesInput, ListBranchesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
