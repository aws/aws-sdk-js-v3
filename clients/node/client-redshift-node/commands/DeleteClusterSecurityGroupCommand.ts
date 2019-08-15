import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteClusterSecurityGroup } from "../model/operations/DeleteClusterSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteClusterSecurityGroupInput } from "../types/DeleteClusterSecurityGroupInput";
import { DeleteClusterSecurityGroupOutput } from "../types/DeleteClusterSecurityGroupOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DeleteClusterSecurityGroupInput";
export * from "../types/DeleteClusterSecurityGroupOutput";
export * from "../types/DeleteClusterSecurityGroupExceptionsUnion";

export class DeleteClusterSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteClusterSecurityGroupInput,
      OutputTypesUnion,
      DeleteClusterSecurityGroupOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteClusterSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteClusterSecurityGroupInput,
    DeleteClusterSecurityGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteClusterSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteClusterSecurityGroupInput,
    DeleteClusterSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteClusterSecurityGroupInput,
        DeleteClusterSecurityGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
