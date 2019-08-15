import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetResourceDefinition } from "../model/operations/GetResourceDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourceDefinitionInput } from "../types/GetResourceDefinitionInput";
import { GetResourceDefinitionOutput } from "../types/GetResourceDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetResourceDefinitionInput";
export * from "../types/GetResourceDefinitionOutput";
export * from "../types/GetResourceDefinitionExceptionsUnion";

export class GetResourceDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourceDefinitionInput,
      OutputTypesUnion,
      GetResourceDefinitionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetResourceDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourceDefinitionInput,
    GetResourceDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetResourceDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResourceDefinitionInput,
    GetResourceDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResourceDefinitionInput, GetResourceDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
