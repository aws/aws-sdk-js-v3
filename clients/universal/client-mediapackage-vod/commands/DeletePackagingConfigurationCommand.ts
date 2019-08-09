import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePackagingConfiguration } from "../model/DeletePackagingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePackagingConfigurationInput } from "../types/DeletePackagingConfigurationInput";
import { DeletePackagingConfigurationOutput } from "../types/DeletePackagingConfigurationOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/DeletePackagingConfigurationInput";
export * from "../types/DeletePackagingConfigurationOutput";
export * from "../types/DeletePackagingConfigurationExceptionsUnion";

export class DeletePackagingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePackagingConfigurationInput,
      OutputTypesUnion,
      DeletePackagingConfigurationOutput,
      MediaPackageVodResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeletePackagingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePackagingConfigurationInput,
    DeletePackagingConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: DeletePackagingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePackagingConfigurationInput,
    DeletePackagingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeletePackagingConfigurationInput,
        DeletePackagingConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
