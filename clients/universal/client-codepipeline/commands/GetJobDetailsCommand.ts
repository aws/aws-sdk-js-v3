import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetJobDetails } from "../model/GetJobDetails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobDetailsInput } from "../types/GetJobDetailsInput";
import { GetJobDetailsOutput } from "../types/GetJobDetailsOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/GetJobDetailsInput";
export * from "../types/GetJobDetailsOutput";
export * from "../types/GetJobDetailsExceptionsUnion";

export class GetJobDetailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobDetailsInput,
      OutputTypesUnion,
      GetJobDetailsOutput,
      CodePipelineResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetJobDetails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobDetailsInput,
    GetJobDetailsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetJobDetailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobDetailsInput, GetJobDetailsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobDetailsInput, GetJobDetailsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
