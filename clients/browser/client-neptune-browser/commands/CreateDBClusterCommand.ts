import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDBCluster } from "../model/CreateDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBClusterInput } from "../types/CreateDBClusterInput";
import { CreateDBClusterOutput } from "../types/CreateDBClusterOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/CreateDBClusterInput";
export * from "../types/CreateDBClusterOutput";
export * from "../types/CreateDBClusterExceptionsUnion";

export class CreateDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBClusterInput,
      OutputTypesUnion,
      CreateDBClusterOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBClusterInput,
    CreateDBClusterOutput,
    Blob
  >();

  constructor(readonly input: CreateDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDBClusterInput, CreateDBClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDBClusterInput, CreateDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
