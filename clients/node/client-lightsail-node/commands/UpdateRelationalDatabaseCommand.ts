import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRelationalDatabase } from "../model/UpdateRelationalDatabase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRelationalDatabaseInput } from "../types/UpdateRelationalDatabaseInput";
import { UpdateRelationalDatabaseOutput } from "../types/UpdateRelationalDatabaseOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/UpdateRelationalDatabaseInput";
export * from "../types/UpdateRelationalDatabaseOutput";
export * from "../types/UpdateRelationalDatabaseExceptionsUnion";

export class UpdateRelationalDatabaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRelationalDatabaseInput,
      OutputTypesUnion,
      UpdateRelationalDatabaseOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRelationalDatabase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRelationalDatabaseInput,
    UpdateRelationalDatabaseOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRelationalDatabaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRelationalDatabaseInput,
    UpdateRelationalDatabaseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRelationalDatabaseInput, UpdateRelationalDatabaseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
