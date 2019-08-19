import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPlatformApplicationAttributes } from "../model/operations/GetPlatformApplicationAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPlatformApplicationAttributesInput } from "../types/GetPlatformApplicationAttributesInput";
import { GetPlatformApplicationAttributesOutput } from "../types/GetPlatformApplicationAttributesOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/GetPlatformApplicationAttributesInput";
export * from "../types/GetPlatformApplicationAttributesOutput";
export * from "../types/GetPlatformApplicationAttributesExceptionsUnion";

export class GetPlatformApplicationAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPlatformApplicationAttributesInput,
      OutputTypesUnion,
      GetPlatformApplicationAttributesOutput,
      SNSResolvedConfiguration,
      Blob
    > {
  readonly model = GetPlatformApplicationAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPlatformApplicationAttributesInput,
    GetPlatformApplicationAttributesOutput,
    Blob
  >();

  constructor(readonly input: GetPlatformApplicationAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPlatformApplicationAttributesInput,
    GetPlatformApplicationAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetPlatformApplicationAttributesInput,
        GetPlatformApplicationAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
