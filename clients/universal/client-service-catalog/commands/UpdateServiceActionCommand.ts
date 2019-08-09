import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateServiceAction } from "../model/UpdateServiceAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateServiceActionInput } from "../types/UpdateServiceActionInput";
import { UpdateServiceActionOutput } from "../types/UpdateServiceActionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/UpdateServiceActionInput";
export * from "../types/UpdateServiceActionOutput";
export * from "../types/UpdateServiceActionExceptionsUnion";

export class UpdateServiceActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateServiceActionInput,
      OutputTypesUnion,
      UpdateServiceActionOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateServiceAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateServiceActionInput,
    UpdateServiceActionOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateServiceActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateServiceActionInput,
    UpdateServiceActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateServiceActionInput, UpdateServiceActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
