import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPartitions } from "../model/GetPartitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPartitionsInput } from "../types/GetPartitionsInput";
import { GetPartitionsOutput } from "../types/GetPartitionsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetPartitionsInput";
export * from "../types/GetPartitionsOutput";
export * from "../types/GetPartitionsExceptionsUnion";

export class GetPartitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPartitionsInput,
      OutputTypesUnion,
      GetPartitionsOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPartitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPartitionsInput,
    GetPartitionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPartitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPartitionsInput, GetPartitionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPartitionsInput, GetPartitionsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
