import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetConnection } from "../model/operations/GetConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConnectionInput } from "../types/GetConnectionInput";
import { GetConnectionOutput } from "../types/GetConnectionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetConnectionInput";
export * from "../types/GetConnectionOutput";
export * from "../types/GetConnectionExceptionsUnion";

export class GetConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConnectionInput,
      OutputTypesUnion,
      GetConnectionOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConnectionInput,
    GetConnectionOutput,
    Blob
  >();

  constructor(readonly input: GetConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetConnectionInput, GetConnectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConnectionInput, GetConnectionOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
