import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateTagOption } from "../model/UpdateTagOption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTagOptionInput } from "../types/UpdateTagOptionInput";
import { UpdateTagOptionOutput } from "../types/UpdateTagOptionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/UpdateTagOptionInput";
export * from "../types/UpdateTagOptionOutput";
export * from "../types/UpdateTagOptionExceptionsUnion";

export class UpdateTagOptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTagOptionInput,
      OutputTypesUnion,
      UpdateTagOptionOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateTagOption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTagOptionInput,
    UpdateTagOptionOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateTagOptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateTagOptionInput, UpdateTagOptionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTagOptionInput, UpdateTagOptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
