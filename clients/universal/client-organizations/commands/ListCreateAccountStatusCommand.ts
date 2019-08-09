import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCreateAccountStatus } from "../model/ListCreateAccountStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCreateAccountStatusInput } from "../types/ListCreateAccountStatusInput";
import { ListCreateAccountStatusOutput } from "../types/ListCreateAccountStatusOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListCreateAccountStatusInput";
export * from "../types/ListCreateAccountStatusOutput";
export * from "../types/ListCreateAccountStatusExceptionsUnion";

export class ListCreateAccountStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCreateAccountStatusInput,
      OutputTypesUnion,
      ListCreateAccountStatusOutput,
      OrganizationsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListCreateAccountStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCreateAccountStatusInput,
    ListCreateAccountStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: ListCreateAccountStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCreateAccountStatusInput,
    ListCreateAccountStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCreateAccountStatusInput, ListCreateAccountStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
