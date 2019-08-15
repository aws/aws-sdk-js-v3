import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutThirdPartyJobSuccessResult } from "../model/operations/PutThirdPartyJobSuccessResult";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutThirdPartyJobSuccessResultInput } from "../types/PutThirdPartyJobSuccessResultInput";
import { PutThirdPartyJobSuccessResultOutput } from "../types/PutThirdPartyJobSuccessResultOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/PutThirdPartyJobSuccessResultInput";
export * from "../types/PutThirdPartyJobSuccessResultOutput";
export * from "../types/PutThirdPartyJobSuccessResultExceptionsUnion";

export class PutThirdPartyJobSuccessResultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutThirdPartyJobSuccessResultInput,
      OutputTypesUnion,
      PutThirdPartyJobSuccessResultOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutThirdPartyJobSuccessResult;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutThirdPartyJobSuccessResultInput,
    PutThirdPartyJobSuccessResultOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutThirdPartyJobSuccessResultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutThirdPartyJobSuccessResultInput,
    PutThirdPartyJobSuccessResultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutThirdPartyJobSuccessResultInput,
        PutThirdPartyJobSuccessResultOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
