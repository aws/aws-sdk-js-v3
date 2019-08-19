import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAvailableSolutionStacks } from "../model/operations/ListAvailableSolutionStacks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAvailableSolutionStacksInput } from "../types/ListAvailableSolutionStacksInput";
import { ListAvailableSolutionStacksOutput } from "../types/ListAvailableSolutionStacksOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/ListAvailableSolutionStacksInput";
export * from "../types/ListAvailableSolutionStacksOutput";
export * from "../types/ListAvailableSolutionStacksExceptionsUnion";

export class ListAvailableSolutionStacksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAvailableSolutionStacksInput,
      OutputTypesUnion,
      ListAvailableSolutionStacksOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAvailableSolutionStacks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAvailableSolutionStacksInput,
    ListAvailableSolutionStacksOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAvailableSolutionStacksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAvailableSolutionStacksInput,
    ListAvailableSolutionStacksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAvailableSolutionStacksInput,
        ListAvailableSolutionStacksOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
