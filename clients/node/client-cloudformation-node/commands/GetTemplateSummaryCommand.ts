import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTemplateSummary } from "../model/GetTemplateSummary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTemplateSummaryInput } from "../types/GetTemplateSummaryInput";
import { GetTemplateSummaryOutput } from "../types/GetTemplateSummaryOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/GetTemplateSummaryInput";
export * from "../types/GetTemplateSummaryOutput";
export * from "../types/GetTemplateSummaryExceptionsUnion";

export class GetTemplateSummaryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTemplateSummaryInput,
      OutputTypesUnion,
      GetTemplateSummaryOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTemplateSummary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTemplateSummaryInput,
    GetTemplateSummaryOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTemplateSummaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetTemplateSummaryInput,
    GetTemplateSummaryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTemplateSummaryInput, GetTemplateSummaryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
