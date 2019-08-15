import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLoginProfile } from "../model/operations/GetLoginProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLoginProfileInput } from "../types/GetLoginProfileInput";
import { GetLoginProfileOutput } from "../types/GetLoginProfileOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetLoginProfileInput";
export * from "../types/GetLoginProfileOutput";
export * from "../types/GetLoginProfileExceptionsUnion";

export class GetLoginProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLoginProfileInput,
      OutputTypesUnion,
      GetLoginProfileOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetLoginProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLoginProfileInput,
    GetLoginProfileOutput,
    Blob
  >();

  constructor(readonly input: GetLoginProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLoginProfileInput, GetLoginProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLoginProfileInput, GetLoginProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
