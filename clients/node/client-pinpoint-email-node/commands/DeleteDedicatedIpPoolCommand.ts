import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDedicatedIpPool } from "../model/operations/DeleteDedicatedIpPool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDedicatedIpPoolInput } from "../types/DeleteDedicatedIpPoolInput";
import { DeleteDedicatedIpPoolOutput } from "../types/DeleteDedicatedIpPoolOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/DeleteDedicatedIpPoolInput";
export * from "../types/DeleteDedicatedIpPoolOutput";
export * from "../types/DeleteDedicatedIpPoolExceptionsUnion";

export class DeleteDedicatedIpPoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDedicatedIpPoolInput,
      OutputTypesUnion,
      DeleteDedicatedIpPoolOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDedicatedIpPool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDedicatedIpPoolInput,
    DeleteDedicatedIpPoolOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDedicatedIpPoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDedicatedIpPoolInput,
    DeleteDedicatedIpPoolOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDedicatedIpPoolInput, DeleteDedicatedIpPoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
