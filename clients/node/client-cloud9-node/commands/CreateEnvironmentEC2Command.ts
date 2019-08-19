import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateEnvironmentEC2 } from "../model/operations/CreateEnvironmentEC2";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEnvironmentEC2Input } from "../types/CreateEnvironmentEC2Input";
import { CreateEnvironmentEC2Output } from "../types/CreateEnvironmentEC2Output";
import { Cloud9ResolvedConfiguration } from "../Cloud9Configuration";
export * from "../types/CreateEnvironmentEC2Input";
export * from "../types/CreateEnvironmentEC2Output";
export * from "../types/CreateEnvironmentEC2ExceptionsUnion";

export class CreateEnvironmentEC2Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEnvironmentEC2Input,
      OutputTypesUnion,
      CreateEnvironmentEC2Output,
      Cloud9ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateEnvironmentEC2;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEnvironmentEC2Input,
    CreateEnvironmentEC2Output,
    _stream.Readable
  >();

  constructor(readonly input: CreateEnvironmentEC2Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Cloud9ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateEnvironmentEC2Input,
    CreateEnvironmentEC2Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEnvironmentEC2Input, CreateEnvironmentEC2Output>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
