import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetConnectivityInfo } from "../model/GetConnectivityInfo";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConnectivityInfoInput } from "../types/GetConnectivityInfoInput";
import { GetConnectivityInfoOutput } from "../types/GetConnectivityInfoOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetConnectivityInfoInput";
export * from "../types/GetConnectivityInfoOutput";
export * from "../types/GetConnectivityInfoExceptionsUnion";

export class GetConnectivityInfoCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConnectivityInfoInput,
      OutputTypesUnion,
      GetConnectivityInfoOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = GetConnectivityInfo;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConnectivityInfoInput,
    GetConnectivityInfoOutput,
    Blob
  >();

  constructor(readonly input: GetConnectivityInfoInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetConnectivityInfoInput,
    GetConnectivityInfoOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConnectivityInfoInput, GetConnectivityInfoOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
