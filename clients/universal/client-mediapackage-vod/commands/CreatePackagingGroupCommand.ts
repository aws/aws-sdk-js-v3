import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePackagingGroup } from "../model/CreatePackagingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePackagingGroupInput } from "../types/CreatePackagingGroupInput";
import { CreatePackagingGroupOutput } from "../types/CreatePackagingGroupOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/CreatePackagingGroupInput";
export * from "../types/CreatePackagingGroupOutput";
export * from "../types/CreatePackagingGroupExceptionsUnion";

export class CreatePackagingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePackagingGroupInput,
      OutputTypesUnion,
      CreatePackagingGroupOutput,
      MediaPackageVodResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreatePackagingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePackagingGroupInput,
    CreatePackagingGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: CreatePackagingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePackagingGroupInput,
    CreatePackagingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePackagingGroupInput, CreatePackagingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
