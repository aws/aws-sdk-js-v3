import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCoreDefinition } from "../model/GetCoreDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCoreDefinitionInput } from "../types/GetCoreDefinitionInput";
import { GetCoreDefinitionOutput } from "../types/GetCoreDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetCoreDefinitionInput";
export * from "../types/GetCoreDefinitionOutput";
export * from "../types/GetCoreDefinitionExceptionsUnion";

export class GetCoreDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCoreDefinitionInput,
      OutputTypesUnion,
      GetCoreDefinitionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCoreDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCoreDefinitionInput,
    GetCoreDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCoreDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCoreDefinitionInput, GetCoreDefinitionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCoreDefinitionInput, GetCoreDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
