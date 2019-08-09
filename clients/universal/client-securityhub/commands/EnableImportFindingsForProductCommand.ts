import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableImportFindingsForProduct } from "../model/EnableImportFindingsForProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableImportFindingsForProductInput } from "../types/EnableImportFindingsForProductInput";
import { EnableImportFindingsForProductOutput } from "../types/EnableImportFindingsForProductOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/EnableImportFindingsForProductInput";
export * from "../types/EnableImportFindingsForProductOutput";
export * from "../types/EnableImportFindingsForProductExceptionsUnion";

export class EnableImportFindingsForProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableImportFindingsForProductInput,
      OutputTypesUnion,
      EnableImportFindingsForProductOutput,
      SecurityHubResolvedConfiguration,
      Uint8Array
    > {
  readonly model = EnableImportFindingsForProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableImportFindingsForProductInput,
    EnableImportFindingsForProductOutput,
    Uint8Array
  >();

  constructor(readonly input: EnableImportFindingsForProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableImportFindingsForProductInput,
    EnableImportFindingsForProductOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        EnableImportFindingsForProductInput,
        EnableImportFindingsForProductOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
