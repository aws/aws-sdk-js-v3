import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBillingGroups } from "../model/ListBillingGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBillingGroupsInput } from "../types/ListBillingGroupsInput";
import { ListBillingGroupsOutput } from "../types/ListBillingGroupsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListBillingGroupsInput";
export * from "../types/ListBillingGroupsOutput";
export * from "../types/ListBillingGroupsExceptionsUnion";

export class ListBillingGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBillingGroupsInput,
      OutputTypesUnion,
      ListBillingGroupsOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBillingGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBillingGroupsInput,
    ListBillingGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBillingGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBillingGroupsInput, ListBillingGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBillingGroupsInput, ListBillingGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
