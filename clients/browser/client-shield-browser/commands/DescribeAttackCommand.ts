import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAttack } from "../model/operations/DescribeAttack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAttackInput } from "../types/DescribeAttackInput";
import { DescribeAttackOutput } from "../types/DescribeAttackOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/DescribeAttackInput";
export * from "../types/DescribeAttackOutput";
export * from "../types/DescribeAttackExceptionsUnion";

export class DescribeAttackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAttackInput,
      OutputTypesUnion,
      DescribeAttackOutput,
      ShieldResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAttack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAttackInput,
    DescribeAttackOutput,
    Blob
  >();

  constructor(readonly input: DescribeAttackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAttackInput, DescribeAttackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAttackInput, DescribeAttackOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
