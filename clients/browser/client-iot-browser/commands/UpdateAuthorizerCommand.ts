import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateAuthorizer } from "../model/operations/UpdateAuthorizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAuthorizerInput } from "../types/UpdateAuthorizerInput";
import { UpdateAuthorizerOutput } from "../types/UpdateAuthorizerOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateAuthorizerInput";
export * from "../types/UpdateAuthorizerOutput";
export * from "../types/UpdateAuthorizerExceptionsUnion";

export class UpdateAuthorizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAuthorizerInput,
      OutputTypesUnion,
      UpdateAuthorizerOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateAuthorizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAuthorizerInput,
    UpdateAuthorizerOutput,
    Blob
  >();

  constructor(readonly input: UpdateAuthorizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAuthorizerInput, UpdateAuthorizerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAuthorizerInput, UpdateAuthorizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
