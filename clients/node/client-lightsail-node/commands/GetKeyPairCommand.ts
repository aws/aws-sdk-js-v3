import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetKeyPair } from "../model/GetKeyPair";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetKeyPairInput } from "../types/GetKeyPairInput";
import { GetKeyPairOutput } from "../types/GetKeyPairOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetKeyPairInput";
export * from "../types/GetKeyPairOutput";
export * from "../types/GetKeyPairExceptionsUnion";

export class GetKeyPairCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetKeyPairInput,
      OutputTypesUnion,
      GetKeyPairOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetKeyPair;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetKeyPairInput,
    GetKeyPairOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetKeyPairInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetKeyPairInput, GetKeyPairOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetKeyPairInput, GetKeyPairOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
