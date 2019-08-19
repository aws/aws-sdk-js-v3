import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeOptionGroups } from "../model/operations/DescribeOptionGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOptionGroupsInput } from "../types/DescribeOptionGroupsInput";
import { DescribeOptionGroupsOutput } from "../types/DescribeOptionGroupsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeOptionGroupsInput";
export * from "../types/DescribeOptionGroupsOutput";
export * from "../types/DescribeOptionGroupsExceptionsUnion";

export class DescribeOptionGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOptionGroupsInput,
      OutputTypesUnion,
      DescribeOptionGroupsOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeOptionGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOptionGroupsInput,
    DescribeOptionGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeOptionGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOptionGroupsInput,
    DescribeOptionGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeOptionGroupsInput, DescribeOptionGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
