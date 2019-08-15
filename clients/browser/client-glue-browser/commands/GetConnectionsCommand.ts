import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetConnections } from "../model/operations/GetConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConnectionsInput } from "../types/GetConnectionsInput";
import { GetConnectionsOutput } from "../types/GetConnectionsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetConnectionsInput";
export * from "../types/GetConnectionsOutput";
export * from "../types/GetConnectionsExceptionsUnion";

export class GetConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConnectionsInput,
      OutputTypesUnion,
      GetConnectionsOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConnectionsInput,
    GetConnectionsOutput,
    Blob
  >();

  constructor(readonly input: GetConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetConnectionsInput, GetConnectionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConnectionsInput, GetConnectionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
