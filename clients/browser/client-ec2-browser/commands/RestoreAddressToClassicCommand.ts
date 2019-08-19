import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestoreAddressToClassic } from "../model/operations/RestoreAddressToClassic";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreAddressToClassicInput } from "../types/RestoreAddressToClassicInput";
import { RestoreAddressToClassicOutput } from "../types/RestoreAddressToClassicOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RestoreAddressToClassicInput";
export * from "../types/RestoreAddressToClassicOutput";
export * from "../types/RestoreAddressToClassicExceptionsUnion";

export class RestoreAddressToClassicCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreAddressToClassicInput,
      OutputTypesUnion,
      RestoreAddressToClassicOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = RestoreAddressToClassic;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreAddressToClassicInput,
    RestoreAddressToClassicOutput,
    Blob
  >();

  constructor(readonly input: RestoreAddressToClassicInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreAddressToClassicInput,
    RestoreAddressToClassicOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestoreAddressToClassicInput, RestoreAddressToClassicOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
