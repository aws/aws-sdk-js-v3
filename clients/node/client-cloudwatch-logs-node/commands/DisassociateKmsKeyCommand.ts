import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateKmsKey } from "../model/operations/DisassociateKmsKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateKmsKeyInput } from "../types/DisassociateKmsKeyInput";
import { DisassociateKmsKeyOutput } from "../types/DisassociateKmsKeyOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DisassociateKmsKeyInput";
export * from "../types/DisassociateKmsKeyOutput";
export * from "../types/DisassociateKmsKeyExceptionsUnion";

export class DisassociateKmsKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateKmsKeyInput,
      OutputTypesUnion,
      DisassociateKmsKeyOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateKmsKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateKmsKeyInput,
    DisassociateKmsKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateKmsKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateKmsKeyInput,
    DisassociateKmsKeyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateKmsKeyInput, DisassociateKmsKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
