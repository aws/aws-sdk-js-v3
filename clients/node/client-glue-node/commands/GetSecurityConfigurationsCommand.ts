import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSecurityConfigurations } from "../model/operations/GetSecurityConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSecurityConfigurationsInput } from "../types/GetSecurityConfigurationsInput";
import { GetSecurityConfigurationsOutput } from "../types/GetSecurityConfigurationsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetSecurityConfigurationsInput";
export * from "../types/GetSecurityConfigurationsOutput";
export * from "../types/GetSecurityConfigurationsExceptionsUnion";

export class GetSecurityConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSecurityConfigurationsInput,
      OutputTypesUnion,
      GetSecurityConfigurationsOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSecurityConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSecurityConfigurationsInput,
    GetSecurityConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSecurityConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSecurityConfigurationsInput,
    GetSecurityConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSecurityConfigurationsInput, GetSecurityConfigurationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
