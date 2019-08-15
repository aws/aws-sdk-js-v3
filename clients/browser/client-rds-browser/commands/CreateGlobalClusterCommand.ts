import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateGlobalCluster } from "../model/operations/CreateGlobalCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGlobalClusterInput } from "../types/CreateGlobalClusterInput";
import { CreateGlobalClusterOutput } from "../types/CreateGlobalClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateGlobalClusterInput";
export * from "../types/CreateGlobalClusterOutput";
export * from "../types/CreateGlobalClusterExceptionsUnion";

export class CreateGlobalClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGlobalClusterInput,
      OutputTypesUnion,
      CreateGlobalClusterOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = CreateGlobalCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGlobalClusterInput,
    CreateGlobalClusterOutput,
    Blob
  >();

  constructor(readonly input: CreateGlobalClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateGlobalClusterInput,
    CreateGlobalClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateGlobalClusterInput, CreateGlobalClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
