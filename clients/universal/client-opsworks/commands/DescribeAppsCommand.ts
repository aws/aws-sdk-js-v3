import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeApps } from "../model/DescribeApps";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAppsInput } from "../types/DescribeAppsInput";
import { DescribeAppsOutput } from "../types/DescribeAppsOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeAppsInput";
export * from "../types/DescribeAppsOutput";
export * from "../types/DescribeAppsExceptionsUnion";

export class DescribeAppsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAppsInput,
      OutputTypesUnion,
      DescribeAppsOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeApps;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAppsInput,
    DescribeAppsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeAppsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAppsInput, DescribeAppsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAppsInput, DescribeAppsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
