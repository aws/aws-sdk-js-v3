import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDocumentPath } from "../model/GetDocumentPath";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDocumentPathInput } from "../types/GetDocumentPathInput";
import { GetDocumentPathOutput } from "../types/GetDocumentPathOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/GetDocumentPathInput";
export * from "../types/GetDocumentPathOutput";
export * from "../types/GetDocumentPathExceptionsUnion";

export class GetDocumentPathCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDocumentPathInput,
      OutputTypesUnion,
      GetDocumentPathOutput,
      WorkDocsResolvedConfiguration,
      Blob
    > {
  readonly model = GetDocumentPath;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDocumentPathInput,
    GetDocumentPathOutput,
    Blob
  >();

  constructor(readonly input: GetDocumentPathInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDocumentPathInput, GetDocumentPathOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDocumentPathInput, GetDocumentPathOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
