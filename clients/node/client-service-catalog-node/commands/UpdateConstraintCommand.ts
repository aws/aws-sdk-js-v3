import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateConstraint } from "../model/operations/UpdateConstraint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConstraintInput } from "../types/UpdateConstraintInput";
import { UpdateConstraintOutput } from "../types/UpdateConstraintOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/UpdateConstraintInput";
export * from "../types/UpdateConstraintOutput";
export * from "../types/UpdateConstraintExceptionsUnion";

export class UpdateConstraintCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConstraintInput,
      OutputTypesUnion,
      UpdateConstraintOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateConstraint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConstraintInput,
    UpdateConstraintOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateConstraintInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateConstraintInput, UpdateConstraintOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateConstraintInput, UpdateConstraintOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
