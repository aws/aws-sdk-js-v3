import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRelationalDatabaseParameters } from "../model/GetRelationalDatabaseParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabaseParametersInput } from "../types/GetRelationalDatabaseParametersInput";
import { GetRelationalDatabaseParametersOutput } from "../types/GetRelationalDatabaseParametersOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabaseParametersInput";
export * from "../types/GetRelationalDatabaseParametersOutput";
export * from "../types/GetRelationalDatabaseParametersExceptionsUnion";

export class GetRelationalDatabaseParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabaseParametersInput,
      OutputTypesUnion,
      GetRelationalDatabaseParametersOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRelationalDatabaseParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseParametersInput,
    GetRelationalDatabaseParametersOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRelationalDatabaseParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabaseParametersInput,
    GetRelationalDatabaseParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRelationalDatabaseParametersInput,
        GetRelationalDatabaseParametersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
