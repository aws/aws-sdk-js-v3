import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCluster } from "../model/CreateCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateClusterInput } from "../types/CreateClusterInput";
import { CreateClusterOutput } from "../types/CreateClusterOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CreateClusterInput";
export * from "../types/CreateClusterOutput";
export * from "../types/CreateClusterExceptionsUnion";

export class CreateClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateClusterInput,
      OutputTypesUnion,
      CreateClusterOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateClusterInput,
    CreateClusterOutput,
    Blob
  >();

  constructor(readonly input: CreateClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateClusterInput, CreateClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateClusterInput, CreateClusterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
