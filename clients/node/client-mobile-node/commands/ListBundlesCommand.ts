import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBundles } from "../model/operations/ListBundles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBundlesInput } from "../types/ListBundlesInput";
import { ListBundlesOutput } from "../types/ListBundlesOutput";
import { MobileResolvedConfiguration } from "../MobileConfiguration";
export * from "../types/ListBundlesInput";
export * from "../types/ListBundlesOutput";
export * from "../types/ListBundlesExceptionsUnion";

export class ListBundlesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBundlesInput,
      OutputTypesUnion,
      ListBundlesOutput,
      MobileResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBundles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBundlesInput,
    ListBundlesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBundlesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MobileResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBundlesInput, ListBundlesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBundlesInput, ListBundlesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
