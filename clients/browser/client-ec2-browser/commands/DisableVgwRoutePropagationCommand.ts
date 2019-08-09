import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableVgwRoutePropagation } from "../model/DisableVgwRoutePropagation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableVgwRoutePropagationInput } from "../types/DisableVgwRoutePropagationInput";
import { DisableVgwRoutePropagationOutput } from "../types/DisableVgwRoutePropagationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisableVgwRoutePropagationInput";
export * from "../types/DisableVgwRoutePropagationOutput";
export * from "../types/DisableVgwRoutePropagationExceptionsUnion";

export class DisableVgwRoutePropagationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableVgwRoutePropagationInput,
      OutputTypesUnion,
      DisableVgwRoutePropagationOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DisableVgwRoutePropagation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableVgwRoutePropagationInput,
    DisableVgwRoutePropagationOutput,
    Blob
  >();

  constructor(readonly input: DisableVgwRoutePropagationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableVgwRoutePropagationInput,
    DisableVgwRoutePropagationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisableVgwRoutePropagationInput,
        DisableVgwRoutePropagationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
