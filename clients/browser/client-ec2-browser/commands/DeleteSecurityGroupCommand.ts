import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSecurityGroup } from "../model/DeleteSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSecurityGroupInput } from "../types/DeleteSecurityGroupInput";
import { DeleteSecurityGroupOutput } from "../types/DeleteSecurityGroupOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteSecurityGroupInput";
export * from "../types/DeleteSecurityGroupOutput";
export * from "../types/DeleteSecurityGroupExceptionsUnion";

export class DeleteSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSecurityGroupInput,
      OutputTypesUnion,
      DeleteSecurityGroupOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSecurityGroupInput,
    DeleteSecurityGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSecurityGroupInput,
    DeleteSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSecurityGroupInput, DeleteSecurityGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
