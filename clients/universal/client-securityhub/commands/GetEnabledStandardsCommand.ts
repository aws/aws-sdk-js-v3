import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEnabledStandards } from "../model/GetEnabledStandards";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEnabledStandardsInput } from "../types/GetEnabledStandardsInput";
import { GetEnabledStandardsOutput } from "../types/GetEnabledStandardsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/GetEnabledStandardsInput";
export * from "../types/GetEnabledStandardsOutput";
export * from "../types/GetEnabledStandardsExceptionsUnion";

export class GetEnabledStandardsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEnabledStandardsInput,
      OutputTypesUnion,
      GetEnabledStandardsOutput,
      SecurityHubResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetEnabledStandards;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEnabledStandardsInput,
    GetEnabledStandardsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetEnabledStandardsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetEnabledStandardsInput,
    GetEnabledStandardsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEnabledStandardsInput, GetEnabledStandardsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
