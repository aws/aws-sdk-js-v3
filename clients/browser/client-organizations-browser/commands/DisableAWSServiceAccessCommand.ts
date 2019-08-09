import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableAWSServiceAccess } from "../model/DisableAWSServiceAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableAWSServiceAccessInput } from "../types/DisableAWSServiceAccessInput";
import { DisableAWSServiceAccessOutput } from "../types/DisableAWSServiceAccessOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DisableAWSServiceAccessInput";
export * from "../types/DisableAWSServiceAccessOutput";
export * from "../types/DisableAWSServiceAccessExceptionsUnion";

export class DisableAWSServiceAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableAWSServiceAccessInput,
      OutputTypesUnion,
      DisableAWSServiceAccessOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = DisableAWSServiceAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableAWSServiceAccessInput,
    DisableAWSServiceAccessOutput,
    Blob
  >();

  constructor(readonly input: DisableAWSServiceAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableAWSServiceAccessInput,
    DisableAWSServiceAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableAWSServiceAccessInput, DisableAWSServiceAccessOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
