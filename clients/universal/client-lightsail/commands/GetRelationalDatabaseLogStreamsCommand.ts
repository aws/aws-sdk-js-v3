import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRelationalDatabaseLogStreams } from "../model/GetRelationalDatabaseLogStreams";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabaseLogStreamsInput } from "../types/GetRelationalDatabaseLogStreamsInput";
import { GetRelationalDatabaseLogStreamsOutput } from "../types/GetRelationalDatabaseLogStreamsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabaseLogStreamsInput";
export * from "../types/GetRelationalDatabaseLogStreamsOutput";
export * from "../types/GetRelationalDatabaseLogStreamsExceptionsUnion";

export class GetRelationalDatabaseLogStreamsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabaseLogStreamsInput,
      OutputTypesUnion,
      GetRelationalDatabaseLogStreamsOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetRelationalDatabaseLogStreams;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseLogStreamsInput,
    GetRelationalDatabaseLogStreamsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetRelationalDatabaseLogStreamsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabaseLogStreamsInput,
    GetRelationalDatabaseLogStreamsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRelationalDatabaseLogStreamsInput,
        GetRelationalDatabaseLogStreamsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
