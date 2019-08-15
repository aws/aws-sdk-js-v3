import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDeviceDefinitions } from "../model/operations/ListDeviceDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeviceDefinitionsInput } from "../types/ListDeviceDefinitionsInput";
import { ListDeviceDefinitionsOutput } from "../types/ListDeviceDefinitionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListDeviceDefinitionsInput";
export * from "../types/ListDeviceDefinitionsOutput";
export * from "../types/ListDeviceDefinitionsExceptionsUnion";

export class ListDeviceDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeviceDefinitionsInput,
      OutputTypesUnion,
      ListDeviceDefinitionsOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDeviceDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeviceDefinitionsInput,
    ListDeviceDefinitionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDeviceDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeviceDefinitionsInput,
    ListDeviceDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeviceDefinitionsInput, ListDeviceDefinitionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
