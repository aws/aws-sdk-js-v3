import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateHsm } from "../model/operations/CreateHsm";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHsmInput } from "../types/CreateHsmInput";
import { CreateHsmOutput } from "../types/CreateHsmOutput";
import { CloudHSMV2ResolvedConfiguration } from "../CloudHSMV2Configuration";
export * from "../types/CreateHsmInput";
export * from "../types/CreateHsmOutput";
export * from "../types/CreateHsmExceptionsUnion";

export class CreateHsmCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHsmInput,
      OutputTypesUnion,
      CreateHsmOutput,
      CloudHSMV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateHsm;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHsmInput,
    CreateHsmOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateHsmInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudHSMV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateHsmInput, CreateHsmOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateHsmInput, CreateHsmOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
