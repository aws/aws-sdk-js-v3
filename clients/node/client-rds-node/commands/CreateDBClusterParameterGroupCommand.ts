import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDBClusterParameterGroup } from "../model/CreateDBClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBClusterParameterGroupInput } from "../types/CreateDBClusterParameterGroupInput";
import { CreateDBClusterParameterGroupOutput } from "../types/CreateDBClusterParameterGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateDBClusterParameterGroupInput";
export * from "../types/CreateDBClusterParameterGroupOutput";
export * from "../types/CreateDBClusterParameterGroupExceptionsUnion";

export class CreateDBClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBClusterParameterGroupInput,
      OutputTypesUnion,
      CreateDBClusterParameterGroupOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDBClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBClusterParameterGroupInput,
    CreateDBClusterParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDBClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDBClusterParameterGroupInput,
    CreateDBClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDBClusterParameterGroupInput,
        CreateDBClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
