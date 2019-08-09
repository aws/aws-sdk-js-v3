import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDetector } from "../model/UpdateDetector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDetectorInput } from "../types/UpdateDetectorInput";
import { UpdateDetectorOutput } from "../types/UpdateDetectorOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/UpdateDetectorInput";
export * from "../types/UpdateDetectorOutput";
export * from "../types/UpdateDetectorExceptionsUnion";

export class UpdateDetectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDetectorInput,
      OutputTypesUnion,
      UpdateDetectorOutput,
      GuardDutyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateDetector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDetectorInput,
    UpdateDetectorOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateDetectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDetectorInput, UpdateDetectorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDetectorInput, UpdateDetectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
