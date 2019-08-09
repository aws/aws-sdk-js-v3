import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDBClusterEndpoint } from "../model/CreateDBClusterEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBClusterEndpointInput } from "../types/CreateDBClusterEndpointInput";
import { CreateDBClusterEndpointOutput } from "../types/CreateDBClusterEndpointOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateDBClusterEndpointInput";
export * from "../types/CreateDBClusterEndpointOutput";
export * from "../types/CreateDBClusterEndpointExceptionsUnion";

export class CreateDBClusterEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBClusterEndpointInput,
      OutputTypesUnion,
      CreateDBClusterEndpointOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDBClusterEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBClusterEndpointInput,
    CreateDBClusterEndpointOutput,
    Blob
  >();

  constructor(readonly input: CreateDBClusterEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDBClusterEndpointInput,
    CreateDBClusterEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDBClusterEndpointInput, CreateDBClusterEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
