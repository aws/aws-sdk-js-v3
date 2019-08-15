import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRulesPackages } from "../model/operations/DescribeRulesPackages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRulesPackagesInput } from "../types/DescribeRulesPackagesInput";
import { DescribeRulesPackagesOutput } from "../types/DescribeRulesPackagesOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DescribeRulesPackagesInput";
export * from "../types/DescribeRulesPackagesOutput";
export * from "../types/DescribeRulesPackagesExceptionsUnion";

export class DescribeRulesPackagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRulesPackagesInput,
      OutputTypesUnion,
      DescribeRulesPackagesOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeRulesPackages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRulesPackagesInput,
    DescribeRulesPackagesOutput,
    Blob
  >();

  constructor(readonly input: DescribeRulesPackagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRulesPackagesInput,
    DescribeRulesPackagesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRulesPackagesInput, DescribeRulesPackagesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
