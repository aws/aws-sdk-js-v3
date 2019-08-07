import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateFunctionCode } from "../model/UpdateFunctionCode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFunctionCodeInput } from "../types/UpdateFunctionCodeInput";
import { UpdateFunctionCodeOutput } from "../types/UpdateFunctionCodeOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/UpdateFunctionCodeInput";
export * from "../types/UpdateFunctionCodeOutput";
export * from "../types/UpdateFunctionCodeExceptionsUnion";

export class UpdateFunctionCodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFunctionCodeInput,
      OutputTypesUnion,
      UpdateFunctionCodeOutput,
      LambdaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateFunctionCode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFunctionCodeInput,
    UpdateFunctionCodeOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateFunctionCodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFunctionCodeInput,
    UpdateFunctionCodeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFunctionCodeInput, UpdateFunctionCodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
