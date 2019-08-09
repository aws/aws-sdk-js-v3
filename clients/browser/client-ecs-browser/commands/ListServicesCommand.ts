import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListServices } from "../model/ListServices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListServicesInput } from "../types/ListServicesInput";
import { ListServicesOutput } from "../types/ListServicesOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/ListServicesInput";
export * from "../types/ListServicesOutput";
export * from "../types/ListServicesExceptionsUnion";

export class ListServicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListServicesInput,
      OutputTypesUnion,
      ListServicesOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = ListServices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListServicesInput,
    ListServicesOutput,
    Blob
  >();

  constructor(readonly input: ListServicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListServicesInput, ListServicesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListServicesInput, ListServicesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
