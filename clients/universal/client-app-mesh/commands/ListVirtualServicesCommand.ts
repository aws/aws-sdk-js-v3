import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListVirtualServices } from "../model/ListVirtualServices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVirtualServicesInput } from "../types/ListVirtualServicesInput";
import { ListVirtualServicesOutput } from "../types/ListVirtualServicesOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/ListVirtualServicesInput";
export * from "../types/ListVirtualServicesOutput";
export * from "../types/ListVirtualServicesExceptionsUnion";

export class ListVirtualServicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVirtualServicesInput,
      OutputTypesUnion,
      ListVirtualServicesOutput,
      AppMeshResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListVirtualServices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVirtualServicesInput,
    ListVirtualServicesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListVirtualServicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVirtualServicesInput,
    ListVirtualServicesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVirtualServicesInput, ListVirtualServicesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
