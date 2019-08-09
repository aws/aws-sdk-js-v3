import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateNetworkInterface } from "../model/CreateNetworkInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNetworkInterfaceInput } from "../types/CreateNetworkInterfaceInput";
import { CreateNetworkInterfaceOutput } from "../types/CreateNetworkInterfaceOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateNetworkInterfaceInput";
export * from "../types/CreateNetworkInterfaceOutput";
export * from "../types/CreateNetworkInterfaceExceptionsUnion";

export class CreateNetworkInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNetworkInterfaceInput,
      OutputTypesUnion,
      CreateNetworkInterfaceOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateNetworkInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNetworkInterfaceInput,
    CreateNetworkInterfaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateNetworkInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateNetworkInterfaceInput,
    CreateNetworkInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNetworkInterfaceInput, CreateNetworkInterfaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
