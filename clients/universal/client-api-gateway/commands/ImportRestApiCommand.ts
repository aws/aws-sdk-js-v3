import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportRestApi } from "../model/ImportRestApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportRestApiInput } from "../types/ImportRestApiInput";
import { ImportRestApiOutput } from "../types/ImportRestApiOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/ImportRestApiInput";
export * from "../types/ImportRestApiOutput";
export * from "../types/ImportRestApiExceptionsUnion";

export class ImportRestApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportRestApiInput,
      OutputTypesUnion,
      ImportRestApiOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ImportRestApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportRestApiInput,
    ImportRestApiOutput,
    Uint8Array
  >();

  constructor(readonly input: ImportRestApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<ImportRestApiInput, ImportRestApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportRestApiInput, ImportRestApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
