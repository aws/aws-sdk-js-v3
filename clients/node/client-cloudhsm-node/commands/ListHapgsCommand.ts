import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListHapgs } from "../model/operations/ListHapgs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListHapgsInput } from "../types/ListHapgsInput";
import { ListHapgsOutput } from "../types/ListHapgsOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/ListHapgsInput";
export * from "../types/ListHapgsOutput";
export * from "../types/ListHapgsExceptionsUnion";

export class ListHapgsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListHapgsInput,
      OutputTypesUnion,
      ListHapgsOutput,
      CloudHSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListHapgs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListHapgsInput,
    ListHapgsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListHapgsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListHapgsInput, ListHapgsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListHapgsInput, ListHapgsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
