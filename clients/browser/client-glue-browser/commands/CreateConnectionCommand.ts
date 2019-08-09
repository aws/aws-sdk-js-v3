import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateConnection } from "../model/CreateConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConnectionInput } from "../types/CreateConnectionInput";
import { CreateConnectionOutput } from "../types/CreateConnectionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreateConnectionInput";
export * from "../types/CreateConnectionOutput";
export * from "../types/CreateConnectionExceptionsUnion";

export class CreateConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConnectionInput,
      OutputTypesUnion,
      CreateConnectionOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = CreateConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConnectionInput,
    CreateConnectionOutput,
    Blob
  >();

  constructor(readonly input: CreateConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateConnectionInput, CreateConnectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateConnectionInput, CreateConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
