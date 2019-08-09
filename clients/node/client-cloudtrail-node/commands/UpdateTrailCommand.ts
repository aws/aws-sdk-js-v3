import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateTrail } from "../model/UpdateTrail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTrailInput } from "../types/UpdateTrailInput";
import { UpdateTrailOutput } from "../types/UpdateTrailOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/UpdateTrailInput";
export * from "../types/UpdateTrailOutput";
export * from "../types/UpdateTrailExceptionsUnion";

export class UpdateTrailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTrailInput,
      OutputTypesUnion,
      UpdateTrailOutput,
      CloudTrailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateTrail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTrailInput,
    UpdateTrailOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateTrailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateTrailInput, UpdateTrailOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTrailInput, UpdateTrailOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
