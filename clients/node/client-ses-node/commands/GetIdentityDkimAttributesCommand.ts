import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetIdentityDkimAttributes } from "../model/GetIdentityDkimAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIdentityDkimAttributesInput } from "../types/GetIdentityDkimAttributesInput";
import { GetIdentityDkimAttributesOutput } from "../types/GetIdentityDkimAttributesOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/GetIdentityDkimAttributesInput";
export * from "../types/GetIdentityDkimAttributesOutput";
export * from "../types/GetIdentityDkimAttributesExceptionsUnion";

export class GetIdentityDkimAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIdentityDkimAttributesInput,
      OutputTypesUnion,
      GetIdentityDkimAttributesOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetIdentityDkimAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityDkimAttributesInput,
    GetIdentityDkimAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetIdentityDkimAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIdentityDkimAttributesInput,
    GetIdentityDkimAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIdentityDkimAttributesInput, GetIdentityDkimAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
