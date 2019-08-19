import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEmailIdentities } from "../model/operations/ListEmailIdentities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEmailIdentitiesInput } from "../types/ListEmailIdentitiesInput";
import { ListEmailIdentitiesOutput } from "../types/ListEmailIdentitiesOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/ListEmailIdentitiesInput";
export * from "../types/ListEmailIdentitiesOutput";
export * from "../types/ListEmailIdentitiesExceptionsUnion";

export class ListEmailIdentitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEmailIdentitiesInput,
      OutputTypesUnion,
      ListEmailIdentitiesOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = ListEmailIdentities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEmailIdentitiesInput,
    ListEmailIdentitiesOutput,
    Blob
  >();

  constructor(readonly input: ListEmailIdentitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListEmailIdentitiesInput,
    ListEmailIdentitiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEmailIdentitiesInput, ListEmailIdentitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
