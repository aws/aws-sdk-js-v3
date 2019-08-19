import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterContainerInstance } from "../model/operations/DeregisterContainerInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterContainerInstanceInput } from "../types/DeregisterContainerInstanceInput";
import { DeregisterContainerInstanceOutput } from "../types/DeregisterContainerInstanceOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DeregisterContainerInstanceInput";
export * from "../types/DeregisterContainerInstanceOutput";
export * from "../types/DeregisterContainerInstanceExceptionsUnion";

export class DeregisterContainerInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterContainerInstanceInput,
      OutputTypesUnion,
      DeregisterContainerInstanceOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterContainerInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterContainerInstanceInput,
    DeregisterContainerInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterContainerInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterContainerInstanceInput,
    DeregisterContainerInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeregisterContainerInstanceInput,
        DeregisterContainerInstanceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
