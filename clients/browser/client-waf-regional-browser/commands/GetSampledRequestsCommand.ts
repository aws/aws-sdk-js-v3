import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSampledRequests } from "../model/operations/GetSampledRequests";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSampledRequestsInput } from "../types/GetSampledRequestsInput";
import { GetSampledRequestsOutput } from "../types/GetSampledRequestsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/GetSampledRequestsInput";
export * from "../types/GetSampledRequestsOutput";
export * from "../types/GetSampledRequestsExceptionsUnion";

export class GetSampledRequestsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSampledRequestsInput,
      OutputTypesUnion,
      GetSampledRequestsOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = GetSampledRequests;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSampledRequestsInput,
    GetSampledRequestsOutput,
    Blob
  >();

  constructor(readonly input: GetSampledRequestsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSampledRequestsInput,
    GetSampledRequestsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSampledRequestsInput, GetSampledRequestsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
