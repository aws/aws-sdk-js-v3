import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCacheSubnetGroup } from "../model/CreateCacheSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCacheSubnetGroupInput } from "../types/CreateCacheSubnetGroupInput";
import { CreateCacheSubnetGroupOutput } from "../types/CreateCacheSubnetGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/CreateCacheSubnetGroupInput";
export * from "../types/CreateCacheSubnetGroupOutput";
export * from "../types/CreateCacheSubnetGroupExceptionsUnion";

export class CreateCacheSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCacheSubnetGroupInput,
      OutputTypesUnion,
      CreateCacheSubnetGroupOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCacheSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCacheSubnetGroupInput,
    CreateCacheSubnetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCacheSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCacheSubnetGroupInput,
    CreateCacheSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCacheSubnetGroupInput, CreateCacheSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
