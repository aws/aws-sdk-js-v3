import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RevokeGrant } from "../model/operations/RevokeGrant";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeGrantInput } from "../types/RevokeGrantInput";
import { RevokeGrantOutput } from "../types/RevokeGrantOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/RevokeGrantInput";
export * from "../types/RevokeGrantOutput";
export * from "../types/RevokeGrantExceptionsUnion";

export class RevokeGrantCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeGrantInput,
      OutputTypesUnion,
      RevokeGrantOutput,
      KMSResolvedConfiguration,
      Blob
    > {
  readonly model = RevokeGrant;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeGrantInput,
    RevokeGrantOutput,
    Blob
  >();

  constructor(readonly input: RevokeGrantInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<RevokeGrantInput, RevokeGrantOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RevokeGrantInput, RevokeGrantOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
