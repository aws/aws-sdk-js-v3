import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTargetsForPolicy } from "../model/operations/ListTargetsForPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTargetsForPolicyInput } from "../types/ListTargetsForPolicyInput";
import { ListTargetsForPolicyOutput } from "../types/ListTargetsForPolicyOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListTargetsForPolicyInput";
export * from "../types/ListTargetsForPolicyOutput";
export * from "../types/ListTargetsForPolicyExceptionsUnion";

export class ListTargetsForPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTargetsForPolicyInput,
      OutputTypesUnion,
      ListTargetsForPolicyOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTargetsForPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTargetsForPolicyInput,
    ListTargetsForPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTargetsForPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTargetsForPolicyInput,
    ListTargetsForPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTargetsForPolicyInput, ListTargetsForPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
