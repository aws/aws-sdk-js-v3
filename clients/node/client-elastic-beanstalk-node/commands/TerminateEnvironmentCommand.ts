import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TerminateEnvironment } from "../model/operations/TerminateEnvironment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateEnvironmentInput } from "../types/TerminateEnvironmentInput";
import { TerminateEnvironmentOutput } from "../types/TerminateEnvironmentOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/TerminateEnvironmentInput";
export * from "../types/TerminateEnvironmentOutput";
export * from "../types/TerminateEnvironmentExceptionsUnion";

export class TerminateEnvironmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateEnvironmentInput,
      OutputTypesUnion,
      TerminateEnvironmentOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TerminateEnvironment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateEnvironmentInput,
    TerminateEnvironmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: TerminateEnvironmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TerminateEnvironmentInput,
    TerminateEnvironmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TerminateEnvironmentInput, TerminateEnvironmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
