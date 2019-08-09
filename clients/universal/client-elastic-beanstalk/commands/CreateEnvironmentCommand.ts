import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateEnvironment } from "../model/CreateEnvironment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEnvironmentInput } from "../types/CreateEnvironmentInput";
import { CreateEnvironmentOutput } from "../types/CreateEnvironmentOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/CreateEnvironmentInput";
export * from "../types/CreateEnvironmentOutput";
export * from "../types/CreateEnvironmentExceptionsUnion";

export class CreateEnvironmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEnvironmentInput,
      OutputTypesUnion,
      CreateEnvironmentOutput,
      ElasticBeanstalkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateEnvironment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEnvironmentInput,
    CreateEnvironmentOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateEnvironmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateEnvironmentInput, CreateEnvironmentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEnvironmentInput, CreateEnvironmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
