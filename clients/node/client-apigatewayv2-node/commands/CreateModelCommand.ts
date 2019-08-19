import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateModel } from "../model/operations/CreateModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateModelInput } from "../types/CreateModelInput";
import { CreateModelOutput } from "../types/CreateModelOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/CreateModelInput";
export * from "../types/CreateModelOutput";
export * from "../types/CreateModelExceptionsUnion";

export class CreateModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateModelInput,
      OutputTypesUnion,
      CreateModelOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateModelInput,
    CreateModelOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateModelInput, CreateModelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateModelInput, CreateModelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
