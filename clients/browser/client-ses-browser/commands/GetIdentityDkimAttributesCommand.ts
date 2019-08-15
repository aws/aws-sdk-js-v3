import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIdentityDkimAttributes } from "../model/operations/GetIdentityDkimAttributes";
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
      Blob
    > {
  readonly model = GetIdentityDkimAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityDkimAttributesInput,
    GetIdentityDkimAttributesOutput,
    Blob
  >();

  constructor(readonly input: GetIdentityDkimAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
