import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateOrUpdateTags } from "../model/CreateOrUpdateTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateOrUpdateTagsInput } from "../types/CreateOrUpdateTagsInput";
import { CreateOrUpdateTagsOutput } from "../types/CreateOrUpdateTagsOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/CreateOrUpdateTagsInput";
export * from "../types/CreateOrUpdateTagsOutput";
export * from "../types/CreateOrUpdateTagsExceptionsUnion";

export class CreateOrUpdateTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateOrUpdateTagsInput,
      OutputTypesUnion,
      CreateOrUpdateTagsOutput,
      AutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateOrUpdateTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateOrUpdateTagsInput,
    CreateOrUpdateTagsOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateOrUpdateTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateOrUpdateTagsInput,
    CreateOrUpdateTagsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateOrUpdateTagsInput, CreateOrUpdateTagsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
