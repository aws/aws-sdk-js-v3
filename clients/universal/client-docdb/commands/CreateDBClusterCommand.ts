import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDBCluster } from "../model/CreateDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBClusterInput } from "../types/CreateDBClusterInput";
import { CreateDBClusterOutput } from "../types/CreateDBClusterOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
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
      DocDBResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBClusterInput,
    CreateDBClusterOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DocDBResolvedConfiguration
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
