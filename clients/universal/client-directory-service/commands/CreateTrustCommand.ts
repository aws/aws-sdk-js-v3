import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTrust } from "../model/CreateTrust";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTrustInput } from "../types/CreateTrustInput";
import { CreateTrustOutput } from "../types/CreateTrustOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/CreateTrustInput";
export * from "../types/CreateTrustOutput";
export * from "../types/CreateTrustExceptionsUnion";

export class CreateTrustCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTrustInput,
      OutputTypesUnion,
      CreateTrustOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateTrust;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrustInput,
    CreateTrustOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateTrustInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTrustInput, CreateTrustOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTrustInput, CreateTrustOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
