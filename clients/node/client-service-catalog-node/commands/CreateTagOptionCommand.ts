import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTagOption } from "../model/operations/CreateTagOption";
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
      _stream.Readable
    > {
  readonly model = CreateTagOption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTagOptionInput,
    CreateTagOptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTagOptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
