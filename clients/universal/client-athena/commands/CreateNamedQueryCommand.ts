import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateNamedQuery } from "../model/CreateNamedQuery";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNamedQueryInput } from "../types/CreateNamedQueryInput";
import { CreateNamedQueryOutput } from "../types/CreateNamedQueryOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/CreateNamedQueryInput";
export * from "../types/CreateNamedQueryOutput";
export * from "../types/CreateNamedQueryExceptionsUnion";

export class CreateNamedQueryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNamedQueryInput,
      OutputTypesUnion,
      CreateNamedQueryOutput,
      AthenaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateNamedQuery;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNamedQueryInput,
    CreateNamedQueryOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateNamedQueryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateNamedQueryInput, CreateNamedQueryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNamedQueryInput, CreateNamedQueryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
