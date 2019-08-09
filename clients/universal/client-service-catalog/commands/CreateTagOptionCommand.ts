import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTagOption } from "../model/CreateTagOption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTagOptionInput } from "../types/CreateTagOptionInput";
import { CreateTagOptionOutput } from "../types/CreateTagOptionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/CreateTagOptionInput";
export * from "../types/CreateTagOptionOutput";
export * from "../types/CreateTagOptionExceptionsUnion";

export class CreateTagOptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTagOptionInput,
      OutputTypesUnion,
      CreateTagOptionOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateTagOption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTagOptionInput,
    CreateTagOptionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateTagOptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTagOptionInput, CreateTagOptionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTagOptionInput, CreateTagOptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
