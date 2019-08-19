import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTagOption } from "../model/operations/DeleteTagOption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTagOptionInput } from "../types/DeleteTagOptionInput";
import { DeleteTagOptionOutput } from "../types/DeleteTagOptionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DeleteTagOptionInput";
export * from "../types/DeleteTagOptionOutput";
export * from "../types/DeleteTagOptionExceptionsUnion";

export class DeleteTagOptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTagOptionInput,
      OutputTypesUnion,
      DeleteTagOptionOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteTagOption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTagOptionInput,
    DeleteTagOptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTagOptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTagOptionInput, DeleteTagOptionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTagOptionInput, DeleteTagOptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
