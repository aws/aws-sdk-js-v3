import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DiscoverInstances } from "../model/DiscoverInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DiscoverInstancesInput } from "../types/DiscoverInstancesInput";
import { DiscoverInstancesOutput } from "../types/DiscoverInstancesOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/DiscoverInstancesInput";
export * from "../types/DiscoverInstancesOutput";
export * from "../types/DiscoverInstancesExceptionsUnion";

export class DiscoverInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DiscoverInstancesInput,
      OutputTypesUnion,
      DiscoverInstancesOutput,
      ServiceDiscoveryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DiscoverInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DiscoverInstancesInput,
    DiscoverInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DiscoverInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<DiscoverInstancesInput, DiscoverInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DiscoverInstancesInput, DiscoverInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
