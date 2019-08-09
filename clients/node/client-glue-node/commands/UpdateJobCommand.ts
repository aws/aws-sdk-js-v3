import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateJob } from "../model/UpdateJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateJobInput } from "../types/UpdateJobInput";
import { UpdateJobOutput } from "../types/UpdateJobOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
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
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateJobInput,
    UpdateJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
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
