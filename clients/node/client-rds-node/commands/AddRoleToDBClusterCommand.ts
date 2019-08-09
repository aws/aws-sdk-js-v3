import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddRoleToDBCluster } from "../model/AddRoleToDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddRoleToDBClusterInput } from "../types/AddRoleToDBClusterInput";
import { AddRoleToDBClusterOutput } from "../types/AddRoleToDBClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/AddRoleToDBClusterInput";
export * from "../types/AddRoleToDBClusterOutput";
export * from "../types/AddRoleToDBClusterExceptionsUnion";

export class AddRoleToDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddRoleToDBClusterInput,
      OutputTypesUnion,
      AddRoleToDBClusterOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddRoleToDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddRoleToDBClusterInput,
    AddRoleToDBClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddRoleToDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddRoleToDBClusterInput,
    AddRoleToDBClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddRoleToDBClusterInput, AddRoleToDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
