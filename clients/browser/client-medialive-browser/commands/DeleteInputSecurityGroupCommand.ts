import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteInputSecurityGroup } from "../model/operations/DeleteInputSecurityGroup";
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
      Blob
    > {
  readonly model = DeleteInputSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInputSecurityGroupInput,
    DeleteInputSecurityGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteInputSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
