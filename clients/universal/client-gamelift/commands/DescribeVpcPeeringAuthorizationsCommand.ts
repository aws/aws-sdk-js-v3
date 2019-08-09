import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVpcPeeringAuthorizations } from "../model/DescribeVpcPeeringAuthorizations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcPeeringAuthorizationsInput } from "../types/DescribeVpcPeeringAuthorizationsInput";
import { DescribeVpcPeeringAuthorizationsOutput } from "../types/DescribeVpcPeeringAuthorizationsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeVpcPeeringAuthorizationsInput";
export * from "../types/DescribeVpcPeeringAuthorizationsOutput";
export * from "../types/DescribeVpcPeeringAuthorizationsExceptionsUnion";

export class DescribeVpcPeeringAuthorizationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcPeeringAuthorizationsInput,
      OutputTypesUnion,
      DescribeVpcPeeringAuthorizationsOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeVpcPeeringAuthorizations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcPeeringAuthorizationsInput,
    DescribeVpcPeeringAuthorizationsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeVpcPeeringAuthorizationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcPeeringAuthorizationsInput,
    DescribeVpcPeeringAuthorizationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeVpcPeeringAuthorizationsInput,
        DescribeVpcPeeringAuthorizationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
