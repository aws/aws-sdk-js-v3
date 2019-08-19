import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCognitoEvents } from "../model/operations/GetCognitoEvents";
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
      _stream.Readable
    > {
  readonly model = GetCognitoEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCognitoEventsInput,
    GetCognitoEventsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCognitoEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
