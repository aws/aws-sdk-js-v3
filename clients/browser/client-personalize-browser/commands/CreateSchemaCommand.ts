import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSchema } from "../model/CreateSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSchemaInput } from "../types/CreateSchemaInput";
import { CreateSchemaOutput } from "../types/CreateSchemaOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/CreateSchemaInput";
export * from "../types/CreateSchemaOutput";
export * from "../types/CreateSchemaExceptionsUnion";

export class CreateSchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSchemaInput,
      OutputTypesUnion,
      CreateSchemaOutput,
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSchemaInput,
    CreateSchemaOutput,
    Blob
  >();

  constructor(readonly input: CreateSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSchemaInput, CreateSchemaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSchemaInput, CreateSchemaOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
