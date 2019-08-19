import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePatchGroups } from "../model/operations/DescribePatchGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePatchGroupsInput } from "../types/DescribePatchGroupsInput";
import { DescribePatchGroupsOutput } from "../types/DescribePatchGroupsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribePatchGroupsInput";
export * from "../types/DescribePatchGroupsOutput";
export * from "../types/DescribePatchGroupsExceptionsUnion";

export class DescribePatchGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePatchGroupsInput,
      OutputTypesUnion,
      DescribePatchGroupsOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePatchGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePatchGroupsInput,
    DescribePatchGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePatchGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePatchGroupsInput,
    DescribePatchGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePatchGroupsInput, DescribePatchGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
