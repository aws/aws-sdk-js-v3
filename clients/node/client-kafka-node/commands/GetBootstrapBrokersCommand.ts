import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetBootstrapBrokers } from "../model/GetBootstrapBrokers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBootstrapBrokersInput } from "../types/GetBootstrapBrokersInput";
import { GetBootstrapBrokersOutput } from "../types/GetBootstrapBrokersOutput";
import { KafkaResolvedConfiguration } from "../KafkaConfiguration";
export * from "../types/GetBootstrapBrokersInput";
export * from "../types/GetBootstrapBrokersOutput";
export * from "../types/GetBootstrapBrokersExceptionsUnion";

export class GetBootstrapBrokersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBootstrapBrokersInput,
      OutputTypesUnion,
      GetBootstrapBrokersOutput,
      KafkaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetBootstrapBrokers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBootstrapBrokersInput,
    GetBootstrapBrokersOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetBootstrapBrokersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KafkaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBootstrapBrokersInput,
    GetBootstrapBrokersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBootstrapBrokersInput, GetBootstrapBrokersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
