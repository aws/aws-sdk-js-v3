import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AllocateHostedConnection } from "../model/AllocateHostedConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AllocateHostedConnectionInput } from "../types/AllocateHostedConnectionInput";
import { AllocateHostedConnectionOutput } from "../types/AllocateHostedConnectionOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/AllocateHostedConnectionInput";
export * from "../types/AllocateHostedConnectionOutput";
export * from "../types/AllocateHostedConnectionExceptionsUnion";

export class AllocateHostedConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AllocateHostedConnectionInput,
      OutputTypesUnion,
      AllocateHostedConnectionOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = AllocateHostedConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AllocateHostedConnectionInput,
    AllocateHostedConnectionOutput,
    Blob
  >();

  constructor(readonly input: AllocateHostedConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AllocateHostedConnectionInput,
    AllocateHostedConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AllocateHostedConnectionInput, AllocateHostedConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
