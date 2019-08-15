import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListNetworkProfiles } from "../model/operations/ListNetworkProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListNetworkProfilesInput } from "../types/ListNetworkProfilesInput";
import { ListNetworkProfilesOutput } from "../types/ListNetworkProfilesOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListNetworkProfilesInput";
export * from "../types/ListNetworkProfilesOutput";
export * from "../types/ListNetworkProfilesExceptionsUnion";

export class ListNetworkProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListNetworkProfilesInput,
      OutputTypesUnion,
      ListNetworkProfilesOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = ListNetworkProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListNetworkProfilesInput,
    ListNetworkProfilesOutput,
    Blob
  >();

  constructor(readonly input: ListNetworkProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListNetworkProfilesInput,
    ListNetworkProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListNetworkProfilesInput, ListNetworkProfilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
