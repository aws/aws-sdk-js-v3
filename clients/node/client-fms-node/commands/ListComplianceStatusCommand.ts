import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListComplianceStatus } from "../model/operations/ListComplianceStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListComplianceStatusInput } from "../types/ListComplianceStatusInput";
import { ListComplianceStatusOutput } from "../types/ListComplianceStatusOutput";
import { FMSResolvedConfiguration } from "../FMSConfiguration";
export * from "../types/ListComplianceStatusInput";
export * from "../types/ListComplianceStatusOutput";
export * from "../types/ListComplianceStatusExceptionsUnion";

export class ListComplianceStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListComplianceStatusInput,
      OutputTypesUnion,
      ListComplianceStatusOutput,
      FMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListComplianceStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListComplianceStatusInput,
    ListComplianceStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListComplianceStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListComplianceStatusInput,
    ListComplianceStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListComplianceStatusInput, ListComplianceStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
