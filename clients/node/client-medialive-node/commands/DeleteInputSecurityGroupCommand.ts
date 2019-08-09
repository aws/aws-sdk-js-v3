import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteInputSecurityGroup } from "../model/DeleteInputSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInputSecurityGroupInput } from "../types/DeleteInputSecurityGroupInput";
import { DeleteInputSecurityGroupOutput } from "../types/DeleteInputSecurityGroupOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/DeleteInputSecurityGroupInput";
export * from "../types/DeleteInputSecurityGroupOutput";
export * from "../types/DeleteInputSecurityGroupExceptionsUnion";

export class DeleteInputSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteInputSecurityGroupInput,
      OutputTypesUnion,
      DeleteInputSecurityGroupOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteInputSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInputSecurityGroupInput,
    DeleteInputSecurityGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteInputSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteInputSecurityGroupInput,
    DeleteInputSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteInputSecurityGroupInput, DeleteInputSecurityGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
