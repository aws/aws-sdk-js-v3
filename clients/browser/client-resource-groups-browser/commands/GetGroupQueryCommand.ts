import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGroupQuery } from "../model/operations/GetGroupQuery";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGroupQueryInput } from "../types/GetGroupQueryInput";
import { GetGroupQueryOutput } from "../types/GetGroupQueryOutput";
import { ResourceGroupsResolvedConfiguration } from "../ResourceGroupsConfiguration";
export * from "../types/GetGroupQueryInput";
export * from "../types/GetGroupQueryOutput";
export * from "../types/GetGroupQueryExceptionsUnion";

export class GetGroupQueryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGroupQueryInput,
      OutputTypesUnion,
      GetGroupQueryOutput,
      ResourceGroupsResolvedConfiguration,
      Blob
    > {
  readonly model = GetGroupQuery;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGroupQueryInput,
    GetGroupQueryOutput,
    Blob
  >();

  constructor(readonly input: GetGroupQueryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ResourceGroupsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGroupQueryInput, GetGroupQueryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGroupQueryInput, GetGroupQueryOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
