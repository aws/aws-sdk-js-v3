import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PostToConnection } from "../model/PostToConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PostToConnectionInput } from "../types/PostToConnectionInput";
import { PostToConnectionOutput } from "../types/PostToConnectionOutput";
import { ApiGatewayManagementApiResolvedConfiguration } from "../ApiGatewayManagementApiConfiguration";
export * from "../types/PostToConnectionInput";
export * from "../types/PostToConnectionOutput";
export * from "../types/PostToConnectionExceptionsUnion";

export class PostToConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PostToConnectionInput,
      OutputTypesUnion,
      PostToConnectionOutput,
      ApiGatewayManagementApiResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PostToConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PostToConnectionInput,
    PostToConnectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: PostToConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayManagementApiResolvedConfiguration
  ): __aws_sdk_types.Handler<PostToConnectionInput, PostToConnectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PostToConnectionInput, PostToConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
