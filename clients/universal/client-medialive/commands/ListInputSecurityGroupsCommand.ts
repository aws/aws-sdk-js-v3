import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListInputSecurityGroups } from "../model/ListInputSecurityGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInputSecurityGroupsInput } from "../types/ListInputSecurityGroupsInput";
import { ListInputSecurityGroupsOutput } from "../types/ListInputSecurityGroupsOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/ListInputSecurityGroupsInput";
export * from "../types/ListInputSecurityGroupsOutput";
export * from "../types/ListInputSecurityGroupsExceptionsUnion";

export class ListInputSecurityGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInputSecurityGroupsInput,
      OutputTypesUnion,
      ListInputSecurityGroupsOutput,
      MediaLiveResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListInputSecurityGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInputSecurityGroupsInput,
    ListInputSecurityGroupsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListInputSecurityGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListInputSecurityGroupsInput,
    ListInputSecurityGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListInputSecurityGroupsInput, ListInputSecurityGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
