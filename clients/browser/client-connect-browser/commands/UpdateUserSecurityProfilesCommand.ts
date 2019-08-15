import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUserSecurityProfiles } from "../model/operations/UpdateUserSecurityProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserSecurityProfilesInput } from "../types/UpdateUserSecurityProfilesInput";
import { UpdateUserSecurityProfilesOutput } from "../types/UpdateUserSecurityProfilesOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/UpdateUserSecurityProfilesInput";
export * from "../types/UpdateUserSecurityProfilesOutput";
export * from "../types/UpdateUserSecurityProfilesExceptionsUnion";

export class UpdateUserSecurityProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserSecurityProfilesInput,
      OutputTypesUnion,
      UpdateUserSecurityProfilesOutput,
      ConnectResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateUserSecurityProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserSecurityProfilesInput,
    UpdateUserSecurityProfilesOutput,
    Blob
  >();

  constructor(readonly input: UpdateUserSecurityProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateUserSecurityProfilesInput,
    UpdateUserSecurityProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateUserSecurityProfilesInput,
        UpdateUserSecurityProfilesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
