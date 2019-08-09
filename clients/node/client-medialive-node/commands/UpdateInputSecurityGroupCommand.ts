import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateInputSecurityGroup } from "../model/UpdateInputSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateInputSecurityGroupInput } from "../types/UpdateInputSecurityGroupInput";
import { UpdateInputSecurityGroupOutput } from "../types/UpdateInputSecurityGroupOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/UpdateInputSecurityGroupInput";
export * from "../types/UpdateInputSecurityGroupOutput";
export * from "../types/UpdateInputSecurityGroupExceptionsUnion";

export class UpdateInputSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateInputSecurityGroupInput,
      OutputTypesUnion,
      UpdateInputSecurityGroupOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateInputSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateInputSecurityGroupInput,
    UpdateInputSecurityGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateInputSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateInputSecurityGroupInput,
    UpdateInputSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateInputSecurityGroupInput, UpdateInputSecurityGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
