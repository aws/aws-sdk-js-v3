import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutComplianceItems } from "../model/operations/PutComplianceItems";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutComplianceItemsInput } from "../types/PutComplianceItemsInput";
import { PutComplianceItemsOutput } from "../types/PutComplianceItemsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/PutComplianceItemsInput";
export * from "../types/PutComplianceItemsOutput";
export * from "../types/PutComplianceItemsExceptionsUnion";

export class PutComplianceItemsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutComplianceItemsInput,
      OutputTypesUnion,
      PutComplianceItemsOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutComplianceItems;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutComplianceItemsInput,
    PutComplianceItemsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutComplianceItemsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutComplianceItemsInput,
    PutComplianceItemsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutComplianceItemsInput, PutComplianceItemsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
