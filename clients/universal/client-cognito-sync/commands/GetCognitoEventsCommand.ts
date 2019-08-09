import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCognitoEvents } from "../model/GetCognitoEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCognitoEventsInput } from "../types/GetCognitoEventsInput";
import { GetCognitoEventsOutput } from "../types/GetCognitoEventsOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/GetCognitoEventsInput";
export * from "../types/GetCognitoEventsOutput";
export * from "../types/GetCognitoEventsExceptionsUnion";

export class GetCognitoEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCognitoEventsInput,
      OutputTypesUnion,
      GetCognitoEventsOutput,
      CognitoSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetCognitoEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCognitoEventsInput,
    GetCognitoEventsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetCognitoEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCognitoEventsInput, GetCognitoEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCognitoEventsInput, GetCognitoEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
