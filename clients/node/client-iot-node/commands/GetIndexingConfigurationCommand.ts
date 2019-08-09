import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetIndexingConfiguration } from "../model/GetIndexingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIndexingConfigurationInput } from "../types/GetIndexingConfigurationInput";
import { GetIndexingConfigurationOutput } from "../types/GetIndexingConfigurationOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/GetIndexingConfigurationInput";
export * from "../types/GetIndexingConfigurationOutput";
export * from "../types/GetIndexingConfigurationExceptionsUnion";

export class GetIndexingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIndexingConfigurationInput,
      OutputTypesUnion,
      GetIndexingConfigurationOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetIndexingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIndexingConfigurationInput,
    GetIndexingConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetIndexingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIndexingConfigurationInput,
    GetIndexingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIndexingConfigurationInput, GetIndexingConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
