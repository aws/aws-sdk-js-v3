import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchDevices } from "../model/operations/SearchDevices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchDevicesInput } from "../types/SearchDevicesInput";
import { SearchDevicesOutput } from "../types/SearchDevicesOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/SearchDevicesInput";
export * from "../types/SearchDevicesOutput";
export * from "../types/SearchDevicesExceptionsUnion";

export class SearchDevicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchDevicesInput,
      OutputTypesUnion,
      SearchDevicesOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = SearchDevices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchDevicesInput,
    SearchDevicesOutput,
    Blob
  >();

  constructor(readonly input: SearchDevicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchDevicesInput, SearchDevicesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchDevicesInput, SearchDevicesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
