import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateConnectionWithLag } from "../model/AssociateConnectionWithLag";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateConnectionWithLagInput } from "../types/AssociateConnectionWithLagInput";
import { AssociateConnectionWithLagOutput } from "../types/AssociateConnectionWithLagOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/AssociateConnectionWithLagInput";
export * from "../types/AssociateConnectionWithLagOutput";
export * from "../types/AssociateConnectionWithLagExceptionsUnion";

export class AssociateConnectionWithLagCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateConnectionWithLagInput,
      OutputTypesUnion,
      AssociateConnectionWithLagOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateConnectionWithLag;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateConnectionWithLagInput,
    AssociateConnectionWithLagOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateConnectionWithLagInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateConnectionWithLagInput,
    AssociateConnectionWithLagOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateConnectionWithLagInput,
        AssociateConnectionWithLagOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
