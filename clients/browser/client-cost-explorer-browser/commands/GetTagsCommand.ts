import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetTags } from "../model/GetTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTagsInput } from "../types/GetTagsInput";
import { GetTagsOutput } from "../types/GetTagsOutput";
import { CostExplorerResolvedConfiguration } from "../CostExplorerConfiguration";
export * from "../types/GetTagsInput";
export * from "../types/GetTagsOutput";
export * from "../types/GetTagsExceptionsUnion";

export class GetTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTagsInput,
      OutputTypesUnion,
      GetTagsOutput,
      CostExplorerResolvedConfiguration,
      Blob
    > {
  readonly model = GetTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTagsInput,
    GetTagsOutput,
    Blob
  >();

  constructor(readonly input: GetTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CostExplorerResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTagsInput, GetTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTagsInput, GetTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
