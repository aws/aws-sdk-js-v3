import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCacheParameterGroup } from "../model/CreateCacheParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCacheParameterGroupInput } from "../types/CreateCacheParameterGroupInput";
import { CreateCacheParameterGroupOutput } from "../types/CreateCacheParameterGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/CreateCacheParameterGroupInput";
export * from "../types/CreateCacheParameterGroupOutput";
export * from "../types/CreateCacheParameterGroupExceptionsUnion";

export class CreateCacheParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCacheParameterGroupInput,
      OutputTypesUnion,
      CreateCacheParameterGroupOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCacheParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCacheParameterGroupInput,
    CreateCacheParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCacheParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCacheParameterGroupInput,
    CreateCacheParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCacheParameterGroupInput, CreateCacheParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
