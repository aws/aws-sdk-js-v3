import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateHapg } from "../model/CreateHapg";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHapgInput } from "../types/CreateHapgInput";
import { CreateHapgOutput } from "../types/CreateHapgOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/CreateHapgInput";
export * from "../types/CreateHapgOutput";
export * from "../types/CreateHapgExceptionsUnion";

export class CreateHapgCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHapgInput,
      OutputTypesUnion,
      CreateHapgOutput,
      CloudHSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateHapg;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHapgInput,
    CreateHapgOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateHapgInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateHapgInput, CreateHapgOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateHapgInput, CreateHapgOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
