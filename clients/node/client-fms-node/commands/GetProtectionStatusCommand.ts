import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetProtectionStatus } from "../model/GetProtectionStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetProtectionStatusInput } from "../types/GetProtectionStatusInput";
import { GetProtectionStatusOutput } from "../types/GetProtectionStatusOutput";
import { FMSResolvedConfiguration } from "../FMSConfiguration";
export * from "../types/GetProtectionStatusInput";
export * from "../types/GetProtectionStatusOutput";
export * from "../types/GetProtectionStatusExceptionsUnion";

export class GetProtectionStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetProtectionStatusInput,
      OutputTypesUnion,
      GetProtectionStatusOutput,
      FMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetProtectionStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetProtectionStatusInput,
    GetProtectionStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetProtectionStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetProtectionStatusInput,
    GetProtectionStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetProtectionStatusInput, GetProtectionStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
