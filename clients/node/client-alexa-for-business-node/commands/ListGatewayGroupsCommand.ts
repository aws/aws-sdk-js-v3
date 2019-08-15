import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListGatewayGroups } from "../model/operations/ListGatewayGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGatewayGroupsInput } from "../types/ListGatewayGroupsInput";
import { ListGatewayGroupsOutput } from "../types/ListGatewayGroupsOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/ListGatewayGroupsInput";
export * from "../types/ListGatewayGroupsOutput";
export * from "../types/ListGatewayGroupsExceptionsUnion";

export class ListGatewayGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGatewayGroupsInput,
      OutputTypesUnion,
      ListGatewayGroupsOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListGatewayGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGatewayGroupsInput,
    ListGatewayGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListGatewayGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGatewayGroupsInput, ListGatewayGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGatewayGroupsInput, ListGatewayGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
