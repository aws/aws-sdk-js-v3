import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyCacheSubnetGroup } from "../model/operations/ModifyCacheSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyCacheSubnetGroupInput } from "../types/ModifyCacheSubnetGroupInput";
import { ModifyCacheSubnetGroupOutput } from "../types/ModifyCacheSubnetGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/ModifyCacheSubnetGroupInput";
export * from "../types/ModifyCacheSubnetGroupOutput";
export * from "../types/ModifyCacheSubnetGroupExceptionsUnion";

export class ModifyCacheSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyCacheSubnetGroupInput,
      OutputTypesUnion,
      ModifyCacheSubnetGroupOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyCacheSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyCacheSubnetGroupInput,
    ModifyCacheSubnetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyCacheSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyCacheSubnetGroupInput,
    ModifyCacheSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyCacheSubnetGroupInput, ModifyCacheSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
