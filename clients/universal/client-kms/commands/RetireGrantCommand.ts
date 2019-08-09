import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RetireGrant } from "../model/RetireGrant";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RetireGrantInput } from "../types/RetireGrantInput";
import { RetireGrantOutput } from "../types/RetireGrantOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/RetireGrantInput";
export * from "../types/RetireGrantOutput";
export * from "../types/RetireGrantExceptionsUnion";

export class RetireGrantCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RetireGrantInput,
      OutputTypesUnion,
      RetireGrantOutput,
      KMSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RetireGrant;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RetireGrantInput,
    RetireGrantOutput,
    Uint8Array
  >();

  constructor(readonly input: RetireGrantInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<RetireGrantInput, RetireGrantOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RetireGrantInput, RetireGrantOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
