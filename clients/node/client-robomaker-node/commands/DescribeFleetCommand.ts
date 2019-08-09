import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeFleet } from "../model/DescribeFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFleetInput } from "../types/DescribeFleetInput";
import { DescribeFleetOutput } from "../types/DescribeFleetOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
export * from "../types/DescribeFleetInput";
export * from "../types/DescribeFleetOutput";
export * from "../types/DescribeFleetExceptionsUnion";

export class DescribeFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFleetInput,
      OutputTypesUnion,
      DescribeFleetOutput,
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFleetInput,
    DescribeFleetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeFleetInput, DescribeFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFleetInput, DescribeFleetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
