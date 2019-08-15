import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ExecuteSql } from "../model/operations/ExecuteSql";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExecuteSqlInput } from "../types/ExecuteSqlInput";
import { ExecuteSqlOutput } from "../types/ExecuteSqlOutput";
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
export * from "../types/ExecuteSqlInput";
export * from "../types/ExecuteSqlOutput";
export * from "../types/ExecuteSqlExceptionsUnion";

export class ExecuteSqlCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExecuteSqlInput,
      OutputTypesUnion,
      ExecuteSqlOutput,
      RDSDataResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ExecuteSql;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExecuteSqlInput,
    ExecuteSqlOutput,
    _stream.Readable
  >();

  constructor(readonly input: ExecuteSqlInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSDataResolvedConfiguration
  ): __aws_sdk_types.Handler<ExecuteSqlInput, ExecuteSqlOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExecuteSqlInput, ExecuteSqlOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
