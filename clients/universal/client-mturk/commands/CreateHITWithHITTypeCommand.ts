import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateHITWithHITType } from "../model/CreateHITWithHITType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHITWithHITTypeInput } from "../types/CreateHITWithHITTypeInput";
import { CreateHITWithHITTypeOutput } from "../types/CreateHITWithHITTypeOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/CreateHITWithHITTypeInput";
export * from "../types/CreateHITWithHITTypeOutput";
export * from "../types/CreateHITWithHITTypeExceptionsUnion";

export class CreateHITWithHITTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHITWithHITTypeInput,
      OutputTypesUnion,
      CreateHITWithHITTypeOutput,
      MTurkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateHITWithHITType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHITWithHITTypeInput,
    CreateHITWithHITTypeOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateHITWithHITTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateHITWithHITTypeInput,
    CreateHITWithHITTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateHITWithHITTypeInput, CreateHITWithHITTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
