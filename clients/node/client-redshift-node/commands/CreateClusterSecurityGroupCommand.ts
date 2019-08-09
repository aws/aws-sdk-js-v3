import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateClusterSecurityGroup } from "../model/CreateClusterSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateClusterSecurityGroupInput } from "../types/CreateClusterSecurityGroupInput";
import { CreateClusterSecurityGroupOutput } from "../types/CreateClusterSecurityGroupOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CreateClusterSecurityGroupInput";
export * from "../types/CreateClusterSecurityGroupOutput";
export * from "../types/CreateClusterSecurityGroupExceptionsUnion";

export class CreateClusterSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateClusterSecurityGroupInput,
      OutputTypesUnion,
      CreateClusterSecurityGroupOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateClusterSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateClusterSecurityGroupInput,
    CreateClusterSecurityGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateClusterSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateClusterSecurityGroupInput,
    CreateClusterSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateClusterSecurityGroupInput,
        CreateClusterSecurityGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
