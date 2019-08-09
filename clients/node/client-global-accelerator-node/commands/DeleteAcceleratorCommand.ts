import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAccelerator } from "../model/DeleteAccelerator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAcceleratorInput } from "../types/DeleteAcceleratorInput";
import { DeleteAcceleratorOutput } from "../types/DeleteAcceleratorOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/DeleteAcceleratorInput";
export * from "../types/DeleteAcceleratorOutput";
export * from "../types/DeleteAcceleratorExceptionsUnion";

export class DeleteAcceleratorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAcceleratorInput,
      OutputTypesUnion,
      DeleteAcceleratorOutput,
      GlobalAcceleratorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAccelerator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAcceleratorInput,
    DeleteAcceleratorOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAcceleratorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAcceleratorInput, DeleteAcceleratorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAcceleratorInput, DeleteAcceleratorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
