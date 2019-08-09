import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDataflowGraph } from "../model/GetDataflowGraph";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDataflowGraphInput } from "../types/GetDataflowGraphInput";
import { GetDataflowGraphOutput } from "../types/GetDataflowGraphOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetDataflowGraphInput";
export * from "../types/GetDataflowGraphOutput";
export * from "../types/GetDataflowGraphExceptionsUnion";

export class GetDataflowGraphCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDataflowGraphInput,
      OutputTypesUnion,
      GetDataflowGraphOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetDataflowGraph;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDataflowGraphInput,
    GetDataflowGraphOutput,
    Blob
  >();

  constructor(readonly input: GetDataflowGraphInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDataflowGraphInput, GetDataflowGraphOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDataflowGraphInput, GetDataflowGraphOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
