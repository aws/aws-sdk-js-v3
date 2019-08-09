import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAccelerator } from "../model/CreateAccelerator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAcceleratorInput } from "../types/CreateAcceleratorInput";
import { CreateAcceleratorOutput } from "../types/CreateAcceleratorOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/CreateAcceleratorInput";
export * from "../types/CreateAcceleratorOutput";
export * from "../types/CreateAcceleratorExceptionsUnion";

export class CreateAcceleratorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAcceleratorInput,
      OutputTypesUnion,
      CreateAcceleratorOutput,
      GlobalAcceleratorResolvedConfiguration,
      Blob
    > {
  readonly model = CreateAccelerator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAcceleratorInput,
    CreateAcceleratorOutput,
    Blob
  >();

  constructor(readonly input: CreateAcceleratorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAcceleratorInput, CreateAcceleratorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAcceleratorInput, CreateAcceleratorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
