import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeElasticIps } from "../model/DescribeElasticIps";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeElasticIpsInput } from "../types/DescribeElasticIpsInput";
import { DescribeElasticIpsOutput } from "../types/DescribeElasticIpsOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeElasticIpsInput";
export * from "../types/DescribeElasticIpsOutput";
export * from "../types/DescribeElasticIpsExceptionsUnion";

export class DescribeElasticIpsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeElasticIpsInput,
      OutputTypesUnion,
      DescribeElasticIpsOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeElasticIps;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeElasticIpsInput,
    DescribeElasticIpsOutput,
    Blob
  >();

  constructor(readonly input: DescribeElasticIpsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeElasticIpsInput,
    DescribeElasticIpsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeElasticIpsInput, DescribeElasticIpsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
