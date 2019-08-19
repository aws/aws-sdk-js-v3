import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RetrieveEnvironmentInfo } from "../model/operations/RetrieveEnvironmentInfo";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RetrieveEnvironmentInfoInput } from "../types/RetrieveEnvironmentInfoInput";
import { RetrieveEnvironmentInfoOutput } from "../types/RetrieveEnvironmentInfoOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/RetrieveEnvironmentInfoInput";
export * from "../types/RetrieveEnvironmentInfoOutput";
export * from "../types/RetrieveEnvironmentInfoExceptionsUnion";

export class RetrieveEnvironmentInfoCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RetrieveEnvironmentInfoInput,
      OutputTypesUnion,
      RetrieveEnvironmentInfoOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RetrieveEnvironmentInfo;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RetrieveEnvironmentInfoInput,
    RetrieveEnvironmentInfoOutput,
    _stream.Readable
  >();

  constructor(readonly input: RetrieveEnvironmentInfoInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RetrieveEnvironmentInfoInput,
    RetrieveEnvironmentInfoOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RetrieveEnvironmentInfoInput, RetrieveEnvironmentInfoOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
