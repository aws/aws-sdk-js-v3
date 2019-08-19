import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SignalResource } from "../model/operations/SignalResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SignalResourceInput } from "../types/SignalResourceInput";
import { SignalResourceOutput } from "../types/SignalResourceOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/SignalResourceInput";
export * from "../types/SignalResourceOutput";
export * from "../types/SignalResourceExceptionsUnion";

export class SignalResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SignalResourceInput,
      OutputTypesUnion,
      SignalResourceOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = SignalResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SignalResourceInput,
    SignalResourceOutput,
    Blob
  >();

  constructor(readonly input: SignalResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<SignalResourceInput, SignalResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SignalResourceInput, SignalResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
