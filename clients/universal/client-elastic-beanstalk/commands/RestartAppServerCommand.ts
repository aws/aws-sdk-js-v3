import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestartAppServer } from "../model/RestartAppServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestartAppServerInput } from "../types/RestartAppServerInput";
import { RestartAppServerOutput } from "../types/RestartAppServerOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/RestartAppServerInput";
export * from "../types/RestartAppServerOutput";
export * from "../types/RestartAppServerExceptionsUnion";

export class RestartAppServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestartAppServerInput,
      OutputTypesUnion,
      RestartAppServerOutput,
      ElasticBeanstalkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RestartAppServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestartAppServerInput,
    RestartAppServerOutput,
    Uint8Array
  >();

  constructor(readonly input: RestartAppServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<RestartAppServerInput, RestartAppServerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestartAppServerInput, RestartAppServerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
