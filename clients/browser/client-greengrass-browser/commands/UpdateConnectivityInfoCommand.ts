import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateConnectivityInfo } from "../model/operations/UpdateConnectivityInfo";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConnectivityInfoInput } from "../types/UpdateConnectivityInfoInput";
import { UpdateConnectivityInfoOutput } from "../types/UpdateConnectivityInfoOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/UpdateConnectivityInfoInput";
export * from "../types/UpdateConnectivityInfoOutput";
export * from "../types/UpdateConnectivityInfoExceptionsUnion";

export class UpdateConnectivityInfoCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConnectivityInfoInput,
      OutputTypesUnion,
      UpdateConnectivityInfoOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateConnectivityInfo;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConnectivityInfoInput,
    UpdateConnectivityInfoOutput,
    Blob
  >();

  constructor(readonly input: UpdateConnectivityInfoInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateConnectivityInfoInput,
    UpdateConnectivityInfoOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateConnectivityInfoInput, UpdateConnectivityInfoOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
