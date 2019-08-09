import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateExpirationForHIT } from "../model/UpdateExpirationForHIT";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateExpirationForHITInput } from "../types/UpdateExpirationForHITInput";
import { UpdateExpirationForHITOutput } from "../types/UpdateExpirationForHITOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/UpdateExpirationForHITInput";
export * from "../types/UpdateExpirationForHITOutput";
export * from "../types/UpdateExpirationForHITExceptionsUnion";

export class UpdateExpirationForHITCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateExpirationForHITInput,
      OutputTypesUnion,
      UpdateExpirationForHITOutput,
      MTurkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateExpirationForHIT;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateExpirationForHITInput,
    UpdateExpirationForHITOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateExpirationForHITInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateExpirationForHITInput,
    UpdateExpirationForHITOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateExpirationForHITInput, UpdateExpirationForHITOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
