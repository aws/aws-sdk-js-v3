import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRoutingProfiles } from "../model/operations/ListRoutingProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRoutingProfilesInput } from "../types/ListRoutingProfilesInput";
import { ListRoutingProfilesOutput } from "../types/ListRoutingProfilesOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/ListRoutingProfilesInput";
export * from "../types/ListRoutingProfilesOutput";
export * from "../types/ListRoutingProfilesExceptionsUnion";

export class ListRoutingProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRoutingProfilesInput,
      OutputTypesUnion,
      ListRoutingProfilesOutput,
      ConnectResolvedConfiguration,
      Blob
    > {
  readonly model = ListRoutingProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRoutingProfilesInput,
    ListRoutingProfilesOutput,
    Blob
  >();

  constructor(readonly input: ListRoutingProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRoutingProfilesInput,
    ListRoutingProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRoutingProfilesInput, ListRoutingProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
