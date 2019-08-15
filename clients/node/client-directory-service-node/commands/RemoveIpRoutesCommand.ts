import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveIpRoutes } from "../model/operations/RemoveIpRoutes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveIpRoutesInput } from "../types/RemoveIpRoutesInput";
import { RemoveIpRoutesOutput } from "../types/RemoveIpRoutesOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/RemoveIpRoutesInput";
export * from "../types/RemoveIpRoutesOutput";
export * from "../types/RemoveIpRoutesExceptionsUnion";

export class RemoveIpRoutesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveIpRoutesInput,
      OutputTypesUnion,
      RemoveIpRoutesOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveIpRoutes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveIpRoutesInput,
    RemoveIpRoutesOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveIpRoutesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<RemoveIpRoutesInput, RemoveIpRoutesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveIpRoutesInput, RemoveIpRoutesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
