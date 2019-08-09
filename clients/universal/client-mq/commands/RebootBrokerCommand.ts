import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RebootBroker } from "../model/RebootBroker";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebootBrokerInput } from "../types/RebootBrokerInput";
import { RebootBrokerOutput } from "../types/RebootBrokerOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/RebootBrokerInput";
export * from "../types/RebootBrokerOutput";
export * from "../types/RebootBrokerExceptionsUnion";

export class RebootBrokerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebootBrokerInput,
      OutputTypesUnion,
      RebootBrokerOutput,
      mqResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RebootBroker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootBrokerInput,
    RebootBrokerOutput,
    Uint8Array
  >();

  constructor(readonly input: RebootBrokerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<RebootBrokerInput, RebootBrokerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebootBrokerInput, RebootBrokerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
