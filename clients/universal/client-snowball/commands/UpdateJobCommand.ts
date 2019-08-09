import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateJob } from "../model/UpdateJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateJobInput } from "../types/UpdateJobInput";
import { UpdateJobOutput } from "../types/UpdateJobOutput";
import { SnowballResolvedConfiguration } from "../SnowballConfiguration";
export * from "../types/UpdateJobInput";
export * from "../types/UpdateJobOutput";
export * from "../types/UpdateJobExceptionsUnion";

export class UpdateJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateJobInput,
      OutputTypesUnion,
      UpdateJobOutput,
      SnowballResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateJobInput,
    UpdateJobOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SnowballResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateJobInput, UpdateJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateJobInput, UpdateJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
