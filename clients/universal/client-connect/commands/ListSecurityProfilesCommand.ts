import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSecurityProfiles } from "../model/ListSecurityProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSecurityProfilesInput } from "../types/ListSecurityProfilesInput";
import { ListSecurityProfilesOutput } from "../types/ListSecurityProfilesOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/ListSecurityProfilesInput";
export * from "../types/ListSecurityProfilesOutput";
export * from "../types/ListSecurityProfilesExceptionsUnion";

export class ListSecurityProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSecurityProfilesInput,
      OutputTypesUnion,
      ListSecurityProfilesOutput,
      ConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListSecurityProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSecurityProfilesInput,
    ListSecurityProfilesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListSecurityProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSecurityProfilesInput,
    ListSecurityProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSecurityProfilesInput, ListSecurityProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
