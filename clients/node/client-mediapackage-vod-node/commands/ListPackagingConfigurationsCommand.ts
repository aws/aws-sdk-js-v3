import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPackagingConfigurations } from "../model/operations/ListPackagingConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPackagingConfigurationsInput } from "../types/ListPackagingConfigurationsInput";
import { ListPackagingConfigurationsOutput } from "../types/ListPackagingConfigurationsOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/ListPackagingConfigurationsInput";
export * from "../types/ListPackagingConfigurationsOutput";
export * from "../types/ListPackagingConfigurationsExceptionsUnion";

export class ListPackagingConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPackagingConfigurationsInput,
      OutputTypesUnion,
      ListPackagingConfigurationsOutput,
      MediaPackageVodResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPackagingConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPackagingConfigurationsInput,
    ListPackagingConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPackagingConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPackagingConfigurationsInput,
    ListPackagingConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListPackagingConfigurationsInput,
        ListPackagingConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
