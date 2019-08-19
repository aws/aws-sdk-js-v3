import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTaskDefinition } from "../model/operations/DescribeTaskDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTaskDefinitionInput } from "../types/DescribeTaskDefinitionInput";
import { DescribeTaskDefinitionOutput } from "../types/DescribeTaskDefinitionOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DescribeTaskDefinitionInput";
export * from "../types/DescribeTaskDefinitionOutput";
export * from "../types/DescribeTaskDefinitionExceptionsUnion";

export class DescribeTaskDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTaskDefinitionInput,
      OutputTypesUnion,
      DescribeTaskDefinitionOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTaskDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTaskDefinitionInput,
    DescribeTaskDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTaskDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTaskDefinitionInput,
    DescribeTaskDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTaskDefinitionInput, DescribeTaskDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
