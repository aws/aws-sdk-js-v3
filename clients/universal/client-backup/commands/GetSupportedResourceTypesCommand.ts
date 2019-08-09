import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSupportedResourceTypes } from "../model/GetSupportedResourceTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSupportedResourceTypesInput } from "../types/GetSupportedResourceTypesInput";
import { GetSupportedResourceTypesOutput } from "../types/GetSupportedResourceTypesOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/GetSupportedResourceTypesInput";
export * from "../types/GetSupportedResourceTypesOutput";
export * from "../types/GetSupportedResourceTypesExceptionsUnion";

export class GetSupportedResourceTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSupportedResourceTypesInput,
      OutputTypesUnion,
      GetSupportedResourceTypesOutput,
      BackupResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetSupportedResourceTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSupportedResourceTypesInput,
    GetSupportedResourceTypesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetSupportedResourceTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSupportedResourceTypesInput,
    GetSupportedResourceTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSupportedResourceTypesInput, GetSupportedResourceTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
