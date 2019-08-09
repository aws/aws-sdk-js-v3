import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAccelerator } from "../model/UpdateAccelerator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAcceleratorInput } from "../types/UpdateAcceleratorInput";
import { UpdateAcceleratorOutput } from "../types/UpdateAcceleratorOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/UpdateAcceleratorInput";
export * from "../types/UpdateAcceleratorOutput";
export * from "../types/UpdateAcceleratorExceptionsUnion";

export class UpdateAcceleratorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAcceleratorInput,
      OutputTypesUnion,
      UpdateAcceleratorOutput,
      GlobalAcceleratorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAccelerator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAcceleratorInput,
    UpdateAcceleratorOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAcceleratorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAcceleratorInput, UpdateAcceleratorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAcceleratorInput, UpdateAcceleratorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
