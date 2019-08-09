import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateScalingParameters } from "../model/UpdateScalingParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateScalingParametersInput } from "../types/UpdateScalingParametersInput";
import { UpdateScalingParametersOutput } from "../types/UpdateScalingParametersOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/UpdateScalingParametersInput";
export * from "../types/UpdateScalingParametersOutput";
export * from "../types/UpdateScalingParametersExceptionsUnion";

export class UpdateScalingParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateScalingParametersInput,
      OutputTypesUnion,
      UpdateScalingParametersOutput,
      CloudSearchResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateScalingParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateScalingParametersInput,
    UpdateScalingParametersOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateScalingParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateScalingParametersInput,
    UpdateScalingParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateScalingParametersInput, UpdateScalingParametersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
