import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterInstance } from "../model/operations/RegisterInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterInstanceInput } from "../types/RegisterInstanceInput";
import { RegisterInstanceOutput } from "../types/RegisterInstanceOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/RegisterInstanceInput";
export * from "../types/RegisterInstanceOutput";
export * from "../types/RegisterInstanceExceptionsUnion";

export class RegisterInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterInstanceInput,
      OutputTypesUnion,
      RegisterInstanceOutput,
      ServiceDiscoveryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterInstanceInput,
    RegisterInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterInstanceInput, RegisterInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterInstanceInput, RegisterInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
