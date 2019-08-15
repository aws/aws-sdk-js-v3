import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeInstancePatchStates } from "../model/operations/DescribeInstancePatchStates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstancePatchStatesInput } from "../types/DescribeInstancePatchStatesInput";
import { DescribeInstancePatchStatesOutput } from "../types/DescribeInstancePatchStatesOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeInstancePatchStatesInput";
export * from "../types/DescribeInstancePatchStatesOutput";
export * from "../types/DescribeInstancePatchStatesExceptionsUnion";

export class DescribeInstancePatchStatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstancePatchStatesInput,
      OutputTypesUnion,
      DescribeInstancePatchStatesOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeInstancePatchStates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstancePatchStatesInput,
    DescribeInstancePatchStatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeInstancePatchStatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInstancePatchStatesInput,
    DescribeInstancePatchStatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeInstancePatchStatesInput,
        DescribeInstancePatchStatesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
