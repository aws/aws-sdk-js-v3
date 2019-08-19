import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateS3Resources } from "../model/operations/UpdateS3Resources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateS3ResourcesInput } from "../types/UpdateS3ResourcesInput";
import { UpdateS3ResourcesOutput } from "../types/UpdateS3ResourcesOutput";
import { MacieResolvedConfiguration } from "../MacieConfiguration";
export * from "../types/UpdateS3ResourcesInput";
export * from "../types/UpdateS3ResourcesOutput";
export * from "../types/UpdateS3ResourcesExceptionsUnion";

export class UpdateS3ResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateS3ResourcesInput,
      OutputTypesUnion,
      UpdateS3ResourcesOutput,
      MacieResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateS3Resources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateS3ResourcesInput,
    UpdateS3ResourcesOutput,
    Blob
  >();

  constructor(readonly input: UpdateS3ResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MacieResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateS3ResourcesInput, UpdateS3ResourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateS3ResourcesInput, UpdateS3ResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
