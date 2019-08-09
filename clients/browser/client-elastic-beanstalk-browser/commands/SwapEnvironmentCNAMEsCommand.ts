import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SwapEnvironmentCNAMEs } from "../model/SwapEnvironmentCNAMEs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SwapEnvironmentCNAMEsInput } from "../types/SwapEnvironmentCNAMEsInput";
import { SwapEnvironmentCNAMEsOutput } from "../types/SwapEnvironmentCNAMEsOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/SwapEnvironmentCNAMEsInput";
export * from "../types/SwapEnvironmentCNAMEsOutput";
export * from "../types/SwapEnvironmentCNAMEsExceptionsUnion";

export class SwapEnvironmentCNAMEsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SwapEnvironmentCNAMEsInput,
      OutputTypesUnion,
      SwapEnvironmentCNAMEsOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = SwapEnvironmentCNAMEs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SwapEnvironmentCNAMEsInput,
    SwapEnvironmentCNAMEsOutput,
    Blob
  >();

  constructor(readonly input: SwapEnvironmentCNAMEsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SwapEnvironmentCNAMEsInput,
    SwapEnvironmentCNAMEsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SwapEnvironmentCNAMEsInput, SwapEnvironmentCNAMEsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
