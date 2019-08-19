import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListCoreDefinitions } from "../model/operations/ListCoreDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCoreDefinitionsInput } from "../types/ListCoreDefinitionsInput";
import { ListCoreDefinitionsOutput } from "../types/ListCoreDefinitionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListCoreDefinitionsInput";
export * from "../types/ListCoreDefinitionsOutput";
export * from "../types/ListCoreDefinitionsExceptionsUnion";

export class ListCoreDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCoreDefinitionsInput,
      OutputTypesUnion,
      ListCoreDefinitionsOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListCoreDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCoreDefinitionsInput,
    ListCoreDefinitionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListCoreDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCoreDefinitionsInput,
    ListCoreDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCoreDefinitionsInput, ListCoreDefinitionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
