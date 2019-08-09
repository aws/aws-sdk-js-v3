import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLag } from "../model/CreateLag";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLagInput } from "../types/CreateLagInput";
import { CreateLagOutput } from "../types/CreateLagOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/CreateLagInput";
export * from "../types/CreateLagOutput";
export * from "../types/CreateLagExceptionsUnion";

export class CreateLagCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLagInput,
      OutputTypesUnion,
      CreateLagOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLag;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLagInput,
    CreateLagOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLagInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateLagInput, CreateLagOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLagInput, CreateLagOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
