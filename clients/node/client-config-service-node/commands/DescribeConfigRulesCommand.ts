import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeConfigRules } from "../model/DescribeConfigRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigRulesInput } from "../types/DescribeConfigRulesInput";
import { DescribeConfigRulesOutput } from "../types/DescribeConfigRulesOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeConfigRulesInput";
export * from "../types/DescribeConfigRulesOutput";
export * from "../types/DescribeConfigRulesExceptionsUnion";

export class DescribeConfigRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigRulesInput,
      OutputTypesUnion,
      DescribeConfigRulesOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeConfigRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigRulesInput,
    DescribeConfigRulesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeConfigRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigRulesInput,
    DescribeConfigRulesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeConfigRulesInput, DescribeConfigRulesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
