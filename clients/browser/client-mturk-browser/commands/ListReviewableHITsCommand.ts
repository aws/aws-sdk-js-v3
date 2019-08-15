import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListReviewableHITs } from "../model/operations/ListReviewableHITs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListReviewableHITsInput } from "../types/ListReviewableHITsInput";
import { ListReviewableHITsOutput } from "../types/ListReviewableHITsOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ListReviewableHITsInput";
export * from "../types/ListReviewableHITsOutput";
export * from "../types/ListReviewableHITsExceptionsUnion";

export class ListReviewableHITsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListReviewableHITsInput,
      OutputTypesUnion,
      ListReviewableHITsOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = ListReviewableHITs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListReviewableHITsInput,
    ListReviewableHITsOutput,
    Blob
  >();

  constructor(readonly input: ListReviewableHITsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListReviewableHITsInput,
    ListReviewableHITsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListReviewableHITsInput, ListReviewableHITsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
