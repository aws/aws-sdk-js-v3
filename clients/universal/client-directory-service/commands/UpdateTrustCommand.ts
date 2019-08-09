import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateTrust } from "../model/UpdateTrust";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTrustInput } from "../types/UpdateTrustInput";
import { UpdateTrustOutput } from "../types/UpdateTrustOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/UpdateTrustInput";
export * from "../types/UpdateTrustOutput";
export * from "../types/UpdateTrustExceptionsUnion";

export class UpdateTrustCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTrustInput,
      OutputTypesUnion,
      UpdateTrustOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateTrust;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTrustInput,
    UpdateTrustOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateTrustInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateTrustInput, UpdateTrustOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTrustInput, UpdateTrustOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
