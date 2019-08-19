import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateClusterSubnetGroup } from "../model/operations/CreateClusterSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateClusterSubnetGroupInput } from "../types/CreateClusterSubnetGroupInput";
import { CreateClusterSubnetGroupOutput } from "../types/CreateClusterSubnetGroupOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CreateClusterSubnetGroupInput";
export * from "../types/CreateClusterSubnetGroupOutput";
export * from "../types/CreateClusterSubnetGroupExceptionsUnion";

export class CreateClusterSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateClusterSubnetGroupInput,
      OutputTypesUnion,
      CreateClusterSubnetGroupOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = CreateClusterSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateClusterSubnetGroupInput,
    CreateClusterSubnetGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateClusterSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateClusterSubnetGroupInput,
    CreateClusterSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateClusterSubnetGroupInput, CreateClusterSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
