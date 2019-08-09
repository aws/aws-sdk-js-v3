import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateConstraint } from "../model/CreateConstraint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConstraintInput } from "../types/CreateConstraintInput";
import { CreateConstraintOutput } from "../types/CreateConstraintOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/CreateConstraintInput";
export * from "../types/CreateConstraintOutput";
export * from "../types/CreateConstraintExceptionsUnion";

export class CreateConstraintCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConstraintInput,
      OutputTypesUnion,
      CreateConstraintOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateConstraint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConstraintInput,
    CreateConstraintOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateConstraintInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateConstraintInput, CreateConstraintOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateConstraintInput, CreateConstraintOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
