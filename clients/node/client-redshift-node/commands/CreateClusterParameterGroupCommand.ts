import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateClusterParameterGroup } from "../model/CreateClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateClusterParameterGroupInput } from "../types/CreateClusterParameterGroupInput";
import { CreateClusterParameterGroupOutput } from "../types/CreateClusterParameterGroupOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CreateClusterParameterGroupInput";
export * from "../types/CreateClusterParameterGroupOutput";
export * from "../types/CreateClusterParameterGroupExceptionsUnion";

export class CreateClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateClusterParameterGroupInput,
      OutputTypesUnion,
      CreateClusterParameterGroupOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateClusterParameterGroupInput,
    CreateClusterParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateClusterParameterGroupInput,
    CreateClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateClusterParameterGroupInput,
        CreateClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
