import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateWorkGroup } from "../model/UpdateWorkGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateWorkGroupInput } from "../types/UpdateWorkGroupInput";
import { UpdateWorkGroupOutput } from "../types/UpdateWorkGroupOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/UpdateWorkGroupInput";
export * from "../types/UpdateWorkGroupOutput";
export * from "../types/UpdateWorkGroupExceptionsUnion";

export class UpdateWorkGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateWorkGroupInput,
      OutputTypesUnion,
      UpdateWorkGroupOutput,
      AthenaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateWorkGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateWorkGroupInput,
    UpdateWorkGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateWorkGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateWorkGroupInput, UpdateWorkGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateWorkGroupInput, UpdateWorkGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
