import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBSecurityGroup } from "../model/DeleteDBSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBSecurityGroupInput } from "../types/DeleteDBSecurityGroupInput";
import { DeleteDBSecurityGroupOutput } from "../types/DeleteDBSecurityGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DeleteDBSecurityGroupInput";
export * from "../types/DeleteDBSecurityGroupOutput";
export * from "../types/DeleteDBSecurityGroupExceptionsUnion";

export class DeleteDBSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBSecurityGroupInput,
      OutputTypesUnion,
      DeleteDBSecurityGroupOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDBSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBSecurityGroupInput,
    DeleteDBSecurityGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDBSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDBSecurityGroupInput,
    DeleteDBSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDBSecurityGroupInput, DeleteDBSecurityGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
