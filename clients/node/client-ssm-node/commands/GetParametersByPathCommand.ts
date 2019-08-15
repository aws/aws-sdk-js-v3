import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetParametersByPath } from "../model/operations/GetParametersByPath";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetParametersByPathInput } from "../types/GetParametersByPathInput";
import { GetParametersByPathOutput } from "../types/GetParametersByPathOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetParametersByPathInput";
export * from "../types/GetParametersByPathOutput";
export * from "../types/GetParametersByPathExceptionsUnion";

export class GetParametersByPathCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetParametersByPathInput,
      OutputTypesUnion,
      GetParametersByPathOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetParametersByPath;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetParametersByPathInput,
    GetParametersByPathOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetParametersByPathInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetParametersByPathInput,
    GetParametersByPathOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetParametersByPathInput, GetParametersByPathOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
