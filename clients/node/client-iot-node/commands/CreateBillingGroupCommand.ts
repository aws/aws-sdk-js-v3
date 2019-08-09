import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateBillingGroup } from "../model/CreateBillingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBillingGroupInput } from "../types/CreateBillingGroupInput";
import { CreateBillingGroupOutput } from "../types/CreateBillingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateBillingGroupInput";
export * from "../types/CreateBillingGroupOutput";
export * from "../types/CreateBillingGroupExceptionsUnion";

export class CreateBillingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBillingGroupInput,
      OutputTypesUnion,
      CreateBillingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateBillingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBillingGroupInput,
    CreateBillingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateBillingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateBillingGroupInput,
    CreateBillingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBillingGroupInput, CreateBillingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
