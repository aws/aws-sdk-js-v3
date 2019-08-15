import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListInputSecurityGroups } from "../model/operations/ListInputSecurityGroups";
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
      _stream.Readable
    > {
  readonly model = ListInputSecurityGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInputSecurityGroupsInput,
    ListInputSecurityGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListInputSecurityGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
