import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ComposeEnvironments } from "../model/operations/ComposeEnvironments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ComposeEnvironmentsInput } from "../types/ComposeEnvironmentsInput";
import { ComposeEnvironmentsOutput } from "../types/ComposeEnvironmentsOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/ComposeEnvironmentsInput";
export * from "../types/ComposeEnvironmentsOutput";
export * from "../types/ComposeEnvironmentsExceptionsUnion";

export class ComposeEnvironmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ComposeEnvironmentsInput,
      OutputTypesUnion,
      ComposeEnvironmentsOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ComposeEnvironments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ComposeEnvironmentsInput,
    ComposeEnvironmentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ComposeEnvironmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ComposeEnvironmentsInput,
    ComposeEnvironmentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ComposeEnvironmentsInput, ComposeEnvironmentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
