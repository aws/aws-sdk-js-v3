import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSubnet } from "../model/CreateSubnet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSubnetInput } from "../types/CreateSubnetInput";
import { CreateSubnetOutput } from "../types/CreateSubnetOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateSubnetInput";
export * from "../types/CreateSubnetOutput";
export * from "../types/CreateSubnetExceptionsUnion";

export class CreateSubnetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSubnetInput,
      OutputTypesUnion,
      CreateSubnetOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSubnet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSubnetInput,
    CreateSubnetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSubnetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSubnetInput, CreateSubnetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSubnetInput, CreateSubnetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
