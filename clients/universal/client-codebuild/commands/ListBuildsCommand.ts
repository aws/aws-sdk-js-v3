import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListBuilds } from "../model/ListBuilds";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBuildsInput } from "../types/ListBuildsInput";
import { ListBuildsOutput } from "../types/ListBuildsOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/ListBuildsInput";
export * from "../types/ListBuildsOutput";
export * from "../types/ListBuildsExceptionsUnion";

export class ListBuildsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBuildsInput,
      OutputTypesUnion,
      ListBuildsOutput,
      CodeBuildResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListBuilds;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBuildsInput,
    ListBuildsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListBuildsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBuildsInput, ListBuildsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBuildsInput, ListBuildsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
