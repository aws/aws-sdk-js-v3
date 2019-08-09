import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCacheSecurityGroup } from "../model/DeleteCacheSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCacheSecurityGroupInput } from "../types/DeleteCacheSecurityGroupInput";
import { DeleteCacheSecurityGroupOutput } from "../types/DeleteCacheSecurityGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DeleteCacheSecurityGroupInput";
export * from "../types/DeleteCacheSecurityGroupOutput";
export * from "../types/DeleteCacheSecurityGroupExceptionsUnion";

export class DeleteCacheSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCacheSecurityGroupInput,
      OutputTypesUnion,
      DeleteCacheSecurityGroupOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCacheSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCacheSecurityGroupInput,
    DeleteCacheSecurityGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCacheSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCacheSecurityGroupInput,
    DeleteCacheSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCacheSecurityGroupInput, DeleteCacheSecurityGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
