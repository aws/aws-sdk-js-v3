import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableImportFindingsForProduct } from "../model/operations/DisableImportFindingsForProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableImportFindingsForProductInput } from "../types/DisableImportFindingsForProductInput";
import { DisableImportFindingsForProductOutput } from "../types/DisableImportFindingsForProductOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/DisableImportFindingsForProductInput";
export * from "../types/DisableImportFindingsForProductOutput";
export * from "../types/DisableImportFindingsForProductExceptionsUnion";

export class DisableImportFindingsForProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableImportFindingsForProductInput,
      OutputTypesUnion,
      DisableImportFindingsForProductOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableImportFindingsForProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableImportFindingsForProductInput,
    DisableImportFindingsForProductOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableImportFindingsForProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableImportFindingsForProductInput,
    DisableImportFindingsForProductOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisableImportFindingsForProductInput,
        DisableImportFindingsForProductOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
