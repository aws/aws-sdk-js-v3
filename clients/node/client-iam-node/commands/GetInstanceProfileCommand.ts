import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetInstanceProfile } from "../model/operations/GetInstanceProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstanceProfileInput } from "../types/GetInstanceProfileInput";
import { GetInstanceProfileOutput } from "../types/GetInstanceProfileOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetInstanceProfileInput";
export * from "../types/GetInstanceProfileOutput";
export * from "../types/GetInstanceProfileExceptionsUnion";

export class GetInstanceProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstanceProfileInput,
      OutputTypesUnion,
      GetInstanceProfileOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetInstanceProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstanceProfileInput,
    GetInstanceProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetInstanceProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetInstanceProfileInput,
    GetInstanceProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstanceProfileInput, GetInstanceProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
