import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateHITTypeOfHIT } from "../model/UpdateHITTypeOfHIT";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateHITTypeOfHITInput } from "../types/UpdateHITTypeOfHITInput";
import { UpdateHITTypeOfHITOutput } from "../types/UpdateHITTypeOfHITOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/UpdateHITTypeOfHITInput";
export * from "../types/UpdateHITTypeOfHITOutput";
export * from "../types/UpdateHITTypeOfHITExceptionsUnion";

export class UpdateHITTypeOfHITCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateHITTypeOfHITInput,
      OutputTypesUnion,
      UpdateHITTypeOfHITOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateHITTypeOfHIT;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateHITTypeOfHITInput,
    UpdateHITTypeOfHITOutput,
    Blob
  >();

  constructor(readonly input: UpdateHITTypeOfHITInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateHITTypeOfHITInput,
    UpdateHITTypeOfHITOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateHITTypeOfHITInput, UpdateHITTypeOfHITOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
