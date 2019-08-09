import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListThingPrincipals } from "../model/ListThingPrincipals";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListThingPrincipalsInput } from "../types/ListThingPrincipalsInput";
import { ListThingPrincipalsOutput } from "../types/ListThingPrincipalsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListThingPrincipalsInput";
export * from "../types/ListThingPrincipalsOutput";
export * from "../types/ListThingPrincipalsExceptionsUnion";

export class ListThingPrincipalsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListThingPrincipalsInput,
      OutputTypesUnion,
      ListThingPrincipalsOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListThingPrincipals;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListThingPrincipalsInput,
    ListThingPrincipalsOutput,
    Blob
  >();

  constructor(readonly input: ListThingPrincipalsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListThingPrincipalsInput,
    ListThingPrincipalsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListThingPrincipalsInput, ListThingPrincipalsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
