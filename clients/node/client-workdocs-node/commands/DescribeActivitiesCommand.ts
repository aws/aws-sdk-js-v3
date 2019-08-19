import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeActivities } from "../model/operations/DescribeActivities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeActivitiesInput } from "../types/DescribeActivitiesInput";
import { DescribeActivitiesOutput } from "../types/DescribeActivitiesOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DescribeActivitiesInput";
export * from "../types/DescribeActivitiesOutput";
export * from "../types/DescribeActivitiesExceptionsUnion";

export class DescribeActivitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeActivitiesInput,
      OutputTypesUnion,
      DescribeActivitiesOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeActivities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeActivitiesInput,
    DescribeActivitiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeActivitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeActivitiesInput,
    DescribeActivitiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeActivitiesInput, DescribeActivitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
