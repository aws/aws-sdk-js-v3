import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetOperationDetail } from "../model/operations/GetOperationDetail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOperationDetailInput } from "../types/GetOperationDetailInput";
import { GetOperationDetailOutput } from "../types/GetOperationDetailOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/GetOperationDetailInput";
export * from "../types/GetOperationDetailOutput";
export * from "../types/GetOperationDetailExceptionsUnion";

export class GetOperationDetailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOperationDetailInput,
      OutputTypesUnion,
      GetOperationDetailOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = GetOperationDetail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOperationDetailInput,
    GetOperationDetailOutput,
    Blob
  >();

  constructor(readonly input: GetOperationDetailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetOperationDetailInput,
    GetOperationDetailOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOperationDetailInput, GetOperationDetailOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
