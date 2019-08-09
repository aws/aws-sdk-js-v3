import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSecurityGroup } from "../model/CreateSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSecurityGroupInput } from "../types/CreateSecurityGroupInput";
import { CreateSecurityGroupOutput } from "../types/CreateSecurityGroupOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateSecurityGroupInput";
export * from "../types/CreateSecurityGroupOutput";
export * from "../types/CreateSecurityGroupExceptionsUnion";

export class CreateSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSecurityGroupInput,
      OutputTypesUnion,
      CreateSecurityGroupOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSecurityGroupInput,
    CreateSecurityGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSecurityGroupInput,
    CreateSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSecurityGroupInput, CreateSecurityGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
