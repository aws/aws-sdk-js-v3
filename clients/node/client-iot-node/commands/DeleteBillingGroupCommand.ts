import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBillingGroup } from "../model/operations/DeleteBillingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBillingGroupInput } from "../types/DeleteBillingGroupInput";
import { DeleteBillingGroupOutput } from "../types/DeleteBillingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteBillingGroupInput";
export * from "../types/DeleteBillingGroupOutput";
export * from "../types/DeleteBillingGroupExceptionsUnion";

export class DeleteBillingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBillingGroupInput,
      OutputTypesUnion,
      DeleteBillingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBillingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBillingGroupInput,
    DeleteBillingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBillingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBillingGroupInput,
    DeleteBillingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBillingGroupInput, DeleteBillingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
