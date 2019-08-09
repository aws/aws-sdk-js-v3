import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateEndpoint } from "../model/CreateEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEndpointInput } from "../types/CreateEndpointInput";
import { CreateEndpointOutput } from "../types/CreateEndpointOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/CreateEndpointInput";
export * from "../types/CreateEndpointOutput";
export * from "../types/CreateEndpointExceptionsUnion";

export class CreateEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEndpointInput,
      OutputTypesUnion,
      CreateEndpointOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Blob
    > {
  readonly model = CreateEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEndpointInput,
    CreateEndpointOutput,
    Blob
  >();

  constructor(readonly input: CreateEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateEndpointInput, CreateEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEndpointInput, CreateEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
