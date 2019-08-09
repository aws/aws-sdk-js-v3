import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableVgwRoutePropagation } from "../model/EnableVgwRoutePropagation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableVgwRoutePropagationInput } from "../types/EnableVgwRoutePropagationInput";
import { EnableVgwRoutePropagationOutput } from "../types/EnableVgwRoutePropagationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/EnableVgwRoutePropagationInput";
export * from "../types/EnableVgwRoutePropagationOutput";
export * from "../types/EnableVgwRoutePropagationExceptionsUnion";

export class EnableVgwRoutePropagationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableVgwRoutePropagationInput,
      OutputTypesUnion,
      EnableVgwRoutePropagationOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = EnableVgwRoutePropagation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableVgwRoutePropagationInput,
    EnableVgwRoutePropagationOutput,
    Blob
  >();

  constructor(readonly input: EnableVgwRoutePropagationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableVgwRoutePropagationInput,
    EnableVgwRoutePropagationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableVgwRoutePropagationInput, EnableVgwRoutePropagationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
