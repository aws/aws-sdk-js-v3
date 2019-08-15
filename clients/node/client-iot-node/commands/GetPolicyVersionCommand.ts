import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPolicyVersion } from "../model/operations/GetPolicyVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPolicyVersionInput } from "../types/GetPolicyVersionInput";
import { GetPolicyVersionOutput } from "../types/GetPolicyVersionOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/GetPolicyVersionInput";
export * from "../types/GetPolicyVersionOutput";
export * from "../types/GetPolicyVersionExceptionsUnion";

export class GetPolicyVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPolicyVersionInput,
      OutputTypesUnion,
      GetPolicyVersionOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPolicyVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPolicyVersionInput,
    GetPolicyVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPolicyVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPolicyVersionInput, GetPolicyVersionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPolicyVersionInput, GetPolicyVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
