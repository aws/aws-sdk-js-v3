import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDedicatedIpPools } from "../model/ListDedicatedIpPools";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDedicatedIpPoolsInput } from "../types/ListDedicatedIpPoolsInput";
import { ListDedicatedIpPoolsOutput } from "../types/ListDedicatedIpPoolsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/ListDedicatedIpPoolsInput";
export * from "../types/ListDedicatedIpPoolsOutput";
export * from "../types/ListDedicatedIpPoolsExceptionsUnion";

export class ListDedicatedIpPoolsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDedicatedIpPoolsInput,
      OutputTypesUnion,
      ListDedicatedIpPoolsOutput,
      PinpointEmailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListDedicatedIpPools;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDedicatedIpPoolsInput,
    ListDedicatedIpPoolsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListDedicatedIpPoolsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDedicatedIpPoolsInput,
    ListDedicatedIpPoolsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDedicatedIpPoolsInput, ListDedicatedIpPoolsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
