import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePrefixLists } from "../model/operations/DescribePrefixLists";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePrefixListsInput } from "../types/DescribePrefixListsInput";
import { DescribePrefixListsOutput } from "../types/DescribePrefixListsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribePrefixListsInput";
export * from "../types/DescribePrefixListsOutput";
export * from "../types/DescribePrefixListsExceptionsUnion";

export class DescribePrefixListsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePrefixListsInput,
      OutputTypesUnion,
      DescribePrefixListsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePrefixLists;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePrefixListsInput,
    DescribePrefixListsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePrefixListsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePrefixListsInput,
    DescribePrefixListsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePrefixListsInput, DescribePrefixListsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
