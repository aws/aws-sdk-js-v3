import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCustomMetadata } from "../model/CreateCustomMetadata";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCustomMetadataInput } from "../types/CreateCustomMetadataInput";
import { CreateCustomMetadataOutput } from "../types/CreateCustomMetadataOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/CreateCustomMetadataInput";
export * from "../types/CreateCustomMetadataOutput";
export * from "../types/CreateCustomMetadataExceptionsUnion";

export class CreateCustomMetadataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCustomMetadataInput,
      OutputTypesUnion,
      CreateCustomMetadataOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCustomMetadata;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCustomMetadataInput,
    CreateCustomMetadataOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCustomMetadataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCustomMetadataInput,
    CreateCustomMetadataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCustomMetadataInput, CreateCustomMetadataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
