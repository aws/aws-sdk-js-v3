import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachNetworkInterface } from "../model/operations/DetachNetworkInterface";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachNetworkInterfaceInput } from "../types/DetachNetworkInterfaceInput";
import { DetachNetworkInterfaceOutput } from "../types/DetachNetworkInterfaceOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DetachNetworkInterfaceInput";
export * from "../types/DetachNetworkInterfaceOutput";
export * from "../types/DetachNetworkInterfaceExceptionsUnion";

export class DetachNetworkInterfaceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachNetworkInterfaceInput,
      OutputTypesUnion,
      DetachNetworkInterfaceOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DetachNetworkInterface;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachNetworkInterfaceInput,
    DetachNetworkInterfaceOutput,
    Blob
  >();

  constructor(readonly input: DetachNetworkInterfaceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachNetworkInterfaceInput,
    DetachNetworkInterfaceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachNetworkInterfaceInput, DetachNetworkInterfaceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
