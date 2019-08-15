import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLaunchTemplates } from "../model/operations/DescribeLaunchTemplates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLaunchTemplatesInput } from "../types/DescribeLaunchTemplatesInput";
import { DescribeLaunchTemplatesOutput } from "../types/DescribeLaunchTemplatesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeLaunchTemplatesInput";
export * from "../types/DescribeLaunchTemplatesOutput";
export * from "../types/DescribeLaunchTemplatesExceptionsUnion";

export class DescribeLaunchTemplatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLaunchTemplatesInput,
      OutputTypesUnion,
      DescribeLaunchTemplatesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLaunchTemplates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLaunchTemplatesInput,
    DescribeLaunchTemplatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLaunchTemplatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLaunchTemplatesInput,
    DescribeLaunchTemplatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLaunchTemplatesInput, DescribeLaunchTemplatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
