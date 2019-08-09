import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetApplicationRevision } from "../model/GetApplicationRevision";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApplicationRevisionInput } from "../types/GetApplicationRevisionInput";
import { GetApplicationRevisionOutput } from "../types/GetApplicationRevisionOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/GetApplicationRevisionInput";
export * from "../types/GetApplicationRevisionOutput";
export * from "../types/GetApplicationRevisionExceptionsUnion";

export class GetApplicationRevisionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApplicationRevisionInput,
      OutputTypesUnion,
      GetApplicationRevisionOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetApplicationRevision;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApplicationRevisionInput,
    GetApplicationRevisionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetApplicationRevisionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetApplicationRevisionInput,
    GetApplicationRevisionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApplicationRevisionInput, GetApplicationRevisionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
