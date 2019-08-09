import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSecurityProfilesForTarget } from "../model/ListSecurityProfilesForTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSecurityProfilesForTargetInput } from "../types/ListSecurityProfilesForTargetInput";
import { ListSecurityProfilesForTargetOutput } from "../types/ListSecurityProfilesForTargetOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListSecurityProfilesForTargetInput";
export * from "../types/ListSecurityProfilesForTargetOutput";
export * from "../types/ListSecurityProfilesForTargetExceptionsUnion";

export class ListSecurityProfilesForTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSecurityProfilesForTargetInput,
      OutputTypesUnion,
      ListSecurityProfilesForTargetOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListSecurityProfilesForTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSecurityProfilesForTargetInput,
    ListSecurityProfilesForTargetOutput,
    Blob
  >();

  constructor(readonly input: ListSecurityProfilesForTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSecurityProfilesForTargetInput,
    ListSecurityProfilesForTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListSecurityProfilesForTargetInput,
        ListSecurityProfilesForTargetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
