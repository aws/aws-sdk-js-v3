import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetImportJob } from "../model/operations/GetImportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetImportJobInput } from "../types/GetImportJobInput";
import { GetImportJobOutput } from "../types/GetImportJobOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetImportJobInput";
export * from "../types/GetImportJobOutput";
export * from "../types/GetImportJobExceptionsUnion";

export class GetImportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetImportJobInput,
      OutputTypesUnion,
      GetImportJobOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetImportJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetImportJobInput,
    GetImportJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetImportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetImportJobInput, GetImportJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetImportJobInput, GetImportJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
