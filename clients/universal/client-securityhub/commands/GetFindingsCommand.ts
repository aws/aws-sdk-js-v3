import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFindings } from "../model/GetFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFindingsInput } from "../types/GetFindingsInput";
import { GetFindingsOutput } from "../types/GetFindingsOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/GetFindingsInput";
export * from "../types/GetFindingsOutput";
export * from "../types/GetFindingsExceptionsUnion";

export class GetFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFindingsInput,
      OutputTypesUnion,
      GetFindingsOutput,
      SecurityHubResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFindingsInput,
    GetFindingsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<GetFindingsInput, GetFindingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFindingsInput, GetFindingsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
