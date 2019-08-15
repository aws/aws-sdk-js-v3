import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePackagingConfiguration } from "../model/operations/CreatePackagingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePackagingConfigurationInput } from "../types/CreatePackagingConfigurationInput";
import { CreatePackagingConfigurationOutput } from "../types/CreatePackagingConfigurationOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/CreatePackagingConfigurationInput";
export * from "../types/CreatePackagingConfigurationOutput";
export * from "../types/CreatePackagingConfigurationExceptionsUnion";

export class CreatePackagingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePackagingConfigurationInput,
      OutputTypesUnion,
      CreatePackagingConfigurationOutput,
      MediaPackageVodResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePackagingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePackagingConfigurationInput,
    CreatePackagingConfigurationOutput,
    Blob
  >();

  constructor(readonly input: CreatePackagingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePackagingConfigurationInput,
    CreatePackagingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreatePackagingConfigurationInput,
        CreatePackagingConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
