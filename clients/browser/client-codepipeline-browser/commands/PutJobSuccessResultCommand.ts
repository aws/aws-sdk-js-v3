import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutJobSuccessResult } from "../model/PutJobSuccessResult";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutJobSuccessResultInput } from "../types/PutJobSuccessResultInput";
import { PutJobSuccessResultOutput } from "../types/PutJobSuccessResultOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/PutJobSuccessResultInput";
export * from "../types/PutJobSuccessResultOutput";
export * from "../types/PutJobSuccessResultExceptionsUnion";

export class PutJobSuccessResultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutJobSuccessResultInput,
      OutputTypesUnion,
      PutJobSuccessResultOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = PutJobSuccessResult;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutJobSuccessResultInput,
    PutJobSuccessResultOutput,
    Blob
  >();

  constructor(readonly input: PutJobSuccessResultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutJobSuccessResultInput,
    PutJobSuccessResultOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutJobSuccessResultInput, PutJobSuccessResultOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
