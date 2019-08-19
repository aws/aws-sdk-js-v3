import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateAcceleratorAttributes } from "../model/operations/UpdateAcceleratorAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAcceleratorAttributesInput } from "../types/UpdateAcceleratorAttributesInput";
import { UpdateAcceleratorAttributesOutput } from "../types/UpdateAcceleratorAttributesOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/UpdateAcceleratorAttributesInput";
export * from "../types/UpdateAcceleratorAttributesOutput";
export * from "../types/UpdateAcceleratorAttributesExceptionsUnion";

export class UpdateAcceleratorAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAcceleratorAttributesInput,
      OutputTypesUnion,
      UpdateAcceleratorAttributesOutput,
      GlobalAcceleratorResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateAcceleratorAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAcceleratorAttributesInput,
    UpdateAcceleratorAttributesOutput,
    Blob
  >();

  constructor(readonly input: UpdateAcceleratorAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAcceleratorAttributesInput,
    UpdateAcceleratorAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateAcceleratorAttributesInput,
        UpdateAcceleratorAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
