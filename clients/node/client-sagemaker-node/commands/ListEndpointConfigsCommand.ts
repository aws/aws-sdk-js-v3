import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListEndpointConfigs } from "../model/ListEndpointConfigs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEndpointConfigsInput } from "../types/ListEndpointConfigsInput";
import { ListEndpointConfigsOutput } from "../types/ListEndpointConfigsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListEndpointConfigsInput";
export * from "../types/ListEndpointConfigsOutput";
export * from "../types/ListEndpointConfigsExceptionsUnion";

export class ListEndpointConfigsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEndpointConfigsInput,
      OutputTypesUnion,
      ListEndpointConfigsOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListEndpointConfigs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEndpointConfigsInput,
    ListEndpointConfigsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListEndpointConfigsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListEndpointConfigsInput,
    ListEndpointConfigsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEndpointConfigsInput, ListEndpointConfigsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
