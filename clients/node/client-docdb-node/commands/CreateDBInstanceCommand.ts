import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDBInstance } from "../model/CreateDBInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBInstanceInput } from "../types/CreateDBInstanceInput";
import { CreateDBInstanceOutput } from "../types/CreateDBInstanceOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/CreateDBInstanceInput";
export * from "../types/CreateDBInstanceOutput";
export * from "../types/CreateDBInstanceExceptionsUnion";

export class CreateDBInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBInstanceInput,
      OutputTypesUnion,
      CreateDBInstanceOutput,
      DocDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDBInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBInstanceInput,
    CreateDBInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDBInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDBInstanceInput, CreateDBInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDBInstanceInput, CreateDBInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
