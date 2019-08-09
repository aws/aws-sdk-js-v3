import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetThirdPartyJobDetails } from "../model/GetThirdPartyJobDetails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetThirdPartyJobDetailsInput } from "../types/GetThirdPartyJobDetailsInput";
import { GetThirdPartyJobDetailsOutput } from "../types/GetThirdPartyJobDetailsOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/GetThirdPartyJobDetailsInput";
export * from "../types/GetThirdPartyJobDetailsOutput";
export * from "../types/GetThirdPartyJobDetailsExceptionsUnion";

export class GetThirdPartyJobDetailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetThirdPartyJobDetailsInput,
      OutputTypesUnion,
      GetThirdPartyJobDetailsOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetThirdPartyJobDetails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetThirdPartyJobDetailsInput,
    GetThirdPartyJobDetailsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetThirdPartyJobDetailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetThirdPartyJobDetailsInput,
    GetThirdPartyJobDetailsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetThirdPartyJobDetailsInput, GetThirdPartyJobDetailsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
