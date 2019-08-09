import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRelationalDatabaseBlueprints } from "../model/GetRelationalDatabaseBlueprints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabaseBlueprintsInput } from "../types/GetRelationalDatabaseBlueprintsInput";
import { GetRelationalDatabaseBlueprintsOutput } from "../types/GetRelationalDatabaseBlueprintsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabaseBlueprintsInput";
export * from "../types/GetRelationalDatabaseBlueprintsOutput";
export * from "../types/GetRelationalDatabaseBlueprintsExceptionsUnion";

export class GetRelationalDatabaseBlueprintsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabaseBlueprintsInput,
      OutputTypesUnion,
      GetRelationalDatabaseBlueprintsOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRelationalDatabaseBlueprints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseBlueprintsInput,
    GetRelationalDatabaseBlueprintsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRelationalDatabaseBlueprintsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabaseBlueprintsInput,
    GetRelationalDatabaseBlueprintsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRelationalDatabaseBlueprintsInput,
        GetRelationalDatabaseBlueprintsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
