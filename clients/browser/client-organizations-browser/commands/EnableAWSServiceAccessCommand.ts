import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableAWSServiceAccess } from "../model/operations/EnableAWSServiceAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableAWSServiceAccessInput } from "../types/EnableAWSServiceAccessInput";
import { EnableAWSServiceAccessOutput } from "../types/EnableAWSServiceAccessOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/EnableAWSServiceAccessInput";
export * from "../types/EnableAWSServiceAccessOutput";
export * from "../types/EnableAWSServiceAccessExceptionsUnion";

export class EnableAWSServiceAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableAWSServiceAccessInput,
      OutputTypesUnion,
      EnableAWSServiceAccessOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = EnableAWSServiceAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableAWSServiceAccessInput,
    EnableAWSServiceAccessOutput,
    Blob
  >();

  constructor(readonly input: EnableAWSServiceAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableAWSServiceAccessInput,
    EnableAWSServiceAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableAWSServiceAccessInput, EnableAWSServiceAccessOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
