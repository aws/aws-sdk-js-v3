import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDhcpOptions } from "../model/operations/CreateDhcpOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDhcpOptionsInput } from "../types/CreateDhcpOptionsInput";
import { CreateDhcpOptionsOutput } from "../types/CreateDhcpOptionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateDhcpOptionsInput";
export * from "../types/CreateDhcpOptionsOutput";
export * from "../types/CreateDhcpOptionsExceptionsUnion";

export class CreateDhcpOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDhcpOptionsInput,
      OutputTypesUnion,
      CreateDhcpOptionsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDhcpOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDhcpOptionsInput,
    CreateDhcpOptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDhcpOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDhcpOptionsInput, CreateDhcpOptionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDhcpOptionsInput, CreateDhcpOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
