import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateConnectivityInfo } from "../model/UpdateConnectivityInfo";
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
      _stream.Readable
    > {
  readonly model = UpdateConnectivityInfo;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConnectivityInfoInput,
    UpdateConnectivityInfoOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateConnectivityInfoInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
