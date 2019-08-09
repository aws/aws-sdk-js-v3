import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApplication } from "../model/GetApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApplicationInput } from "../types/GetApplicationInput";
import { GetApplicationOutput } from "../types/GetApplicationOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/GetApplicationInput";
export * from "../types/GetApplicationOutput";
export * from "../types/GetApplicationExceptionsUnion";

export class GetApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApplicationInput,
      OutputTypesUnion,
      GetApplicationOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApplicationInput,
    GetApplicationOutput,
    Uint8Array
  >();

  constructor(readonly input: GetApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<GetApplicationInput, GetApplicationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApplicationInput, GetApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
