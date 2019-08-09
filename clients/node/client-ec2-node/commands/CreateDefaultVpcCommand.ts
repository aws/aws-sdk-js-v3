import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDefaultVpc } from "../model/CreateDefaultVpc";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDefaultVpcInput } from "../types/CreateDefaultVpcInput";
import { CreateDefaultVpcOutput } from "../types/CreateDefaultVpcOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateDefaultVpcInput";
export * from "../types/CreateDefaultVpcOutput";
export * from "../types/CreateDefaultVpcExceptionsUnion";

export class CreateDefaultVpcCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDefaultVpcInput,
      OutputTypesUnion,
      CreateDefaultVpcOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDefaultVpc;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDefaultVpcInput,
    CreateDefaultVpcOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDefaultVpcInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDefaultVpcInput, CreateDefaultVpcOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDefaultVpcInput, CreateDefaultVpcOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
