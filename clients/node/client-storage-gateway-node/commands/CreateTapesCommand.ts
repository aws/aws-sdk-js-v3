import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTapes } from "../model/operations/CreateTapes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTapesInput } from "../types/CreateTapesInput";
import { CreateTapesOutput } from "../types/CreateTapesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/CreateTapesInput";
export * from "../types/CreateTapesOutput";
export * from "../types/CreateTapesExceptionsUnion";

export class CreateTapesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTapesInput,
      OutputTypesUnion,
      CreateTapesOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTapes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTapesInput,
    CreateTapesOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTapesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTapesInput, CreateTapesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTapesInput, CreateTapesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
