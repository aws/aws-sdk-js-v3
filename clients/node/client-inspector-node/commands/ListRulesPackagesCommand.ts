import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRulesPackages } from "../model/operations/ListRulesPackages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRulesPackagesInput } from "../types/ListRulesPackagesInput";
import { ListRulesPackagesOutput } from "../types/ListRulesPackagesOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/ListRulesPackagesInput";
export * from "../types/ListRulesPackagesOutput";
export * from "../types/ListRulesPackagesExceptionsUnion";

export class ListRulesPackagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRulesPackagesInput,
      OutputTypesUnion,
      ListRulesPackagesOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRulesPackages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRulesPackagesInput,
    ListRulesPackagesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRulesPackagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRulesPackagesInput, ListRulesPackagesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRulesPackagesInput, ListRulesPackagesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
