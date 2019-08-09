import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeThingRegistrationTask } from "../model/DescribeThingRegistrationTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeThingRegistrationTaskInput } from "../types/DescribeThingRegistrationTaskInput";
import { DescribeThingRegistrationTaskOutput } from "../types/DescribeThingRegistrationTaskOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeThingRegistrationTaskInput";
export * from "../types/DescribeThingRegistrationTaskOutput";
export * from "../types/DescribeThingRegistrationTaskExceptionsUnion";

export class DescribeThingRegistrationTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeThingRegistrationTaskInput,
      OutputTypesUnion,
      DescribeThingRegistrationTaskOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeThingRegistrationTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeThingRegistrationTaskInput,
    DescribeThingRegistrationTaskOutput,
    Blob
  >();

  constructor(readonly input: DescribeThingRegistrationTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeThingRegistrationTaskInput,
    DescribeThingRegistrationTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeThingRegistrationTaskInput,
        DescribeThingRegistrationTaskOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
