import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RebootNode } from "../model/operations/RebootNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebootNodeInput } from "../types/RebootNodeInput";
import { RebootNodeOutput } from "../types/RebootNodeOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/RebootNodeInput";
export * from "../types/RebootNodeOutput";
export * from "../types/RebootNodeExceptionsUnion";

export class RebootNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebootNodeInput,
      OutputTypesUnion,
      RebootNodeOutput,
      DAXResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RebootNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootNodeInput,
    RebootNodeOutput,
    _stream.Readable
  >();

  constructor(readonly input: RebootNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<RebootNodeInput, RebootNodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebootNodeInput, RebootNodeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
