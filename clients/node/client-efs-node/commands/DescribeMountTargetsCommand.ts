import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeMountTargets } from "../model/DescribeMountTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMountTargetsInput } from "../types/DescribeMountTargetsInput";
import { DescribeMountTargetsOutput } from "../types/DescribeMountTargetsOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
export * from "../types/DescribeMountTargetsInput";
export * from "../types/DescribeMountTargetsOutput";
export * from "../types/DescribeMountTargetsExceptionsUnion";

export class DescribeMountTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMountTargetsInput,
      OutputTypesUnion,
      DescribeMountTargetsOutput,
      EFSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeMountTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMountTargetsInput,
    DescribeMountTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeMountTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EFSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMountTargetsInput,
    DescribeMountTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeMountTargetsInput, DescribeMountTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
