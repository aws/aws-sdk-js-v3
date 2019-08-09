import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePrefixLists } from "../model/DescribePrefixLists";
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
      Blob
    > {
  readonly model = DescribePrefixLists;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePrefixListsInput,
    DescribePrefixListsOutput,
    Blob
  >();

  constructor(readonly input: DescribePrefixListsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
