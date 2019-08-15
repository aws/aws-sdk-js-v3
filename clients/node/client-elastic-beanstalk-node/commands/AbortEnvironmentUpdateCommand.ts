import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AbortEnvironmentUpdate } from "../model/operations/AbortEnvironmentUpdate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AbortEnvironmentUpdateInput } from "../types/AbortEnvironmentUpdateInput";
import { AbortEnvironmentUpdateOutput } from "../types/AbortEnvironmentUpdateOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/AbortEnvironmentUpdateInput";
export * from "../types/AbortEnvironmentUpdateOutput";
export * from "../types/AbortEnvironmentUpdateExceptionsUnion";

export class AbortEnvironmentUpdateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AbortEnvironmentUpdateInput,
      OutputTypesUnion,
      AbortEnvironmentUpdateOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AbortEnvironmentUpdate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AbortEnvironmentUpdateInput,
    AbortEnvironmentUpdateOutput,
    _stream.Readable
  >();

  constructor(readonly input: AbortEnvironmentUpdateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AbortEnvironmentUpdateInput,
    AbortEnvironmentUpdateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AbortEnvironmentUpdateInput, AbortEnvironmentUpdateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
