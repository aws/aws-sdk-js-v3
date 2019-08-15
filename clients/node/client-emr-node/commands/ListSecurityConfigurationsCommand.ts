import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSecurityConfigurations } from "../model/operations/ListSecurityConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSecurityConfigurationsInput } from "../types/ListSecurityConfigurationsInput";
import { ListSecurityConfigurationsOutput } from "../types/ListSecurityConfigurationsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/ListSecurityConfigurationsInput";
export * from "../types/ListSecurityConfigurationsOutput";
export * from "../types/ListSecurityConfigurationsExceptionsUnion";

export class ListSecurityConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSecurityConfigurationsInput,
      OutputTypesUnion,
      ListSecurityConfigurationsOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSecurityConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSecurityConfigurationsInput,
    ListSecurityConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSecurityConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSecurityConfigurationsInput,
    ListSecurityConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListSecurityConfigurationsInput,
        ListSecurityConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
