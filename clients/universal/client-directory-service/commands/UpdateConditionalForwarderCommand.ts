import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateConditionalForwarder } from "../model/UpdateConditionalForwarder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConditionalForwarderInput } from "../types/UpdateConditionalForwarderInput";
import { UpdateConditionalForwarderOutput } from "../types/UpdateConditionalForwarderOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/UpdateConditionalForwarderInput";
export * from "../types/UpdateConditionalForwarderOutput";
export * from "../types/UpdateConditionalForwarderExceptionsUnion";

export class UpdateConditionalForwarderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConditionalForwarderInput,
      OutputTypesUnion,
      UpdateConditionalForwarderOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateConditionalForwarder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConditionalForwarderInput,
    UpdateConditionalForwarderOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateConditionalForwarderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateConditionalForwarderInput,
    UpdateConditionalForwarderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateConditionalForwarderInput,
        UpdateConditionalForwarderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
