import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateConstraint } from "../model/operations/CreateConstraint";
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
      _stream.Readable
    > {
  readonly model = CreateConstraint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConstraintInput,
    CreateConstraintOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateConstraintInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
