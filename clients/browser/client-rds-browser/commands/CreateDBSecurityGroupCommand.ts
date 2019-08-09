import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDBSecurityGroup } from "../model/CreateDBSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBSecurityGroupInput } from "../types/CreateDBSecurityGroupInput";
import { CreateDBSecurityGroupOutput } from "../types/CreateDBSecurityGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateDBSecurityGroupInput";
export * from "../types/CreateDBSecurityGroupOutput";
export * from "../types/CreateDBSecurityGroupExceptionsUnion";

export class CreateDBSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBSecurityGroupInput,
      OutputTypesUnion,
      CreateDBSecurityGroupOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDBSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBSecurityGroupInput,
    CreateDBSecurityGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateDBSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDBSecurityGroupInput,
    CreateDBSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDBSecurityGroupInput, CreateDBSecurityGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
