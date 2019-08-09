import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeFleetPortSettings } from "../model/DescribeFleetPortSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFleetPortSettingsInput } from "../types/DescribeFleetPortSettingsInput";
import { DescribeFleetPortSettingsOutput } from "../types/DescribeFleetPortSettingsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeFleetPortSettingsInput";
export * from "../types/DescribeFleetPortSettingsOutput";
export * from "../types/DescribeFleetPortSettingsExceptionsUnion";

export class DescribeFleetPortSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFleetPortSettingsInput,
      OutputTypesUnion,
      DescribeFleetPortSettingsOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeFleetPortSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFleetPortSettingsInput,
    DescribeFleetPortSettingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeFleetPortSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFleetPortSettingsInput,
    DescribeFleetPortSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFleetPortSettingsInput, DescribeFleetPortSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
