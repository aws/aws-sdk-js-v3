import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SignalResource } from "../model/SignalResource";
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
      _stream.Readable
    > {
  readonly model = SignalResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SignalResourceInput,
    SignalResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: SignalResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
