import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDatastore } from "../model/CreateDatastore";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDatastoreInput } from "../types/CreateDatastoreInput";
import { CreateDatastoreOutput } from "../types/CreateDatastoreOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/CreateDatastoreInput";
export * from "../types/CreateDatastoreOutput";
export * from "../types/CreateDatastoreExceptionsUnion";

export class CreateDatastoreCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDatastoreInput,
      OutputTypesUnion,
      CreateDatastoreOutput,
      IoTAnalyticsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDatastore;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDatastoreInput,
    CreateDatastoreOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDatastoreInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDatastoreInput, CreateDatastoreOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDatastoreInput, CreateDatastoreOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
