import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIntrospectionSchema } from "../model/GetIntrospectionSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIntrospectionSchemaInput } from "../types/GetIntrospectionSchemaInput";
import { GetIntrospectionSchemaOutput } from "../types/GetIntrospectionSchemaOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/GetIntrospectionSchemaInput";
export * from "../types/GetIntrospectionSchemaOutput";
export * from "../types/GetIntrospectionSchemaExceptionsUnion";

export class GetIntrospectionSchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIntrospectionSchemaInput,
      OutputTypesUnion,
      GetIntrospectionSchemaOutput,
      AppSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetIntrospectionSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIntrospectionSchemaInput,
    GetIntrospectionSchemaOutput,
    Uint8Array
  >();

  constructor(readonly input: GetIntrospectionSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIntrospectionSchemaInput,
    GetIntrospectionSchemaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIntrospectionSchemaInput, GetIntrospectionSchemaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
