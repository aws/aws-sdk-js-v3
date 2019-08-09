import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListThingRegistrationTaskReports } from "../model/ListThingRegistrationTaskReports";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListThingRegistrationTaskReportsInput } from "../types/ListThingRegistrationTaskReportsInput";
import { ListThingRegistrationTaskReportsOutput } from "../types/ListThingRegistrationTaskReportsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListThingRegistrationTaskReportsInput";
export * from "../types/ListThingRegistrationTaskReportsOutput";
export * from "../types/ListThingRegistrationTaskReportsExceptionsUnion";

export class ListThingRegistrationTaskReportsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListThingRegistrationTaskReportsInput,
      OutputTypesUnion,
      ListThingRegistrationTaskReportsOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListThingRegistrationTaskReports;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListThingRegistrationTaskReportsInput,
    ListThingRegistrationTaskReportsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListThingRegistrationTaskReportsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListThingRegistrationTaskReportsInput,
    ListThingRegistrationTaskReportsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListThingRegistrationTaskReportsInput,
        ListThingRegistrationTaskReportsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
