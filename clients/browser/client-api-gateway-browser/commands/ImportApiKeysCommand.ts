import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportApiKeys } from "../model/ImportApiKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportApiKeysInput } from "../types/ImportApiKeysInput";
import { ImportApiKeysOutput } from "../types/ImportApiKeysOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/ImportApiKeysInput";
export * from "../types/ImportApiKeysOutput";
export * from "../types/ImportApiKeysExceptionsUnion";

export class ImportApiKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportApiKeysInput,
      OutputTypesUnion,
      ImportApiKeysOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = ImportApiKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportApiKeysInput,
    ImportApiKeysOutput,
    Blob
  >();

  constructor(readonly input: ImportApiKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<ImportApiKeysInput, ImportApiKeysOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportApiKeysInput, ImportApiKeysOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
