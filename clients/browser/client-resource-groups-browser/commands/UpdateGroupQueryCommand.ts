import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateGroupQuery } from "../model/operations/UpdateGroupQuery";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGroupQueryInput } from "../types/UpdateGroupQueryInput";
import { UpdateGroupQueryOutput } from "../types/UpdateGroupQueryOutput";
import { ResourceGroupsResolvedConfiguration } from "../ResourceGroupsConfiguration";
export * from "../types/UpdateGroupQueryInput";
export * from "../types/UpdateGroupQueryOutput";
export * from "../types/UpdateGroupQueryExceptionsUnion";

export class UpdateGroupQueryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGroupQueryInput,
      OutputTypesUnion,
      UpdateGroupQueryOutput,
      ResourceGroupsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateGroupQuery;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGroupQueryInput,
    UpdateGroupQueryOutput,
    Blob
  >();

  constructor(readonly input: UpdateGroupQueryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ResourceGroupsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateGroupQueryInput, UpdateGroupQueryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGroupQueryInput, UpdateGroupQueryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
