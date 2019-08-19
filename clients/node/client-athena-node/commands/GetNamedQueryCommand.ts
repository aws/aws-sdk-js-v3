import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetNamedQuery } from "../model/operations/GetNamedQuery";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetNamedQueryInput } from "../types/GetNamedQueryInput";
import { GetNamedQueryOutput } from "../types/GetNamedQueryOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/GetNamedQueryInput";
export * from "../types/GetNamedQueryOutput";
export * from "../types/GetNamedQueryExceptionsUnion";

export class GetNamedQueryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetNamedQueryInput,
      OutputTypesUnion,
      GetNamedQueryOutput,
      AthenaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetNamedQuery;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetNamedQueryInput,
    GetNamedQueryOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetNamedQueryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<GetNamedQueryInput, GetNamedQueryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetNamedQueryInput, GetNamedQueryOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
