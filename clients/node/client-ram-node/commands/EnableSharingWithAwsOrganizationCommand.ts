import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableSharingWithAwsOrganization } from "../model/operations/EnableSharingWithAwsOrganization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableSharingWithAwsOrganizationInput } from "../types/EnableSharingWithAwsOrganizationInput";
import { EnableSharingWithAwsOrganizationOutput } from "../types/EnableSharingWithAwsOrganizationOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/EnableSharingWithAwsOrganizationInput";
export * from "../types/EnableSharingWithAwsOrganizationOutput";
export * from "../types/EnableSharingWithAwsOrganizationExceptionsUnion";

export class EnableSharingWithAwsOrganizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableSharingWithAwsOrganizationInput,
      OutputTypesUnion,
      EnableSharingWithAwsOrganizationOutput,
      RAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableSharingWithAwsOrganization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableSharingWithAwsOrganizationInput,
    EnableSharingWithAwsOrganizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableSharingWithAwsOrganizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableSharingWithAwsOrganizationInput,
    EnableSharingWithAwsOrganizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        EnableSharingWithAwsOrganizationInput,
        EnableSharingWithAwsOrganizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
