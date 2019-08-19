import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachNetworkInterface } from "../model/operations/AttachNetworkInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachNetworkInterfaceInput } from "../types/AttachNetworkInterfaceInput";
import { AttachNetworkInterfaceOutput } from "../types/AttachNetworkInterfaceOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AttachNetworkInterfaceInput";
export * from "../types/AttachNetworkInterfaceOutput";
export * from "../types/AttachNetworkInterfaceExceptionsUnion";

export class AttachNetworkInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachNetworkInterfaceInput,
      OutputTypesUnion,
      AttachNetworkInterfaceOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachNetworkInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachNetworkInterfaceInput,
    AttachNetworkInterfaceOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachNetworkInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachNetworkInterfaceInput,
    AttachNetworkInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachNetworkInterfaceInput, AttachNetworkInterfaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
