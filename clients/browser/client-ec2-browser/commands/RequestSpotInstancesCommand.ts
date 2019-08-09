import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RequestSpotInstances } from "../model/RequestSpotInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RequestSpotInstancesInput } from "../types/RequestSpotInstancesInput";
import { RequestSpotInstancesOutput } from "../types/RequestSpotInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RequestSpotInstancesInput";
export * from "../types/RequestSpotInstancesOutput";
export * from "../types/RequestSpotInstancesExceptionsUnion";

export class RequestSpotInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RequestSpotInstancesInput,
      OutputTypesUnion,
      RequestSpotInstancesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = RequestSpotInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RequestSpotInstancesInput,
    RequestSpotInstancesOutput,
    Blob
  >();

  constructor(readonly input: RequestSpotInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RequestSpotInstancesInput,
    RequestSpotInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RequestSpotInstancesInput, RequestSpotInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
