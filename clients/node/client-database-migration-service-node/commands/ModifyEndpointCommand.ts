import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyEndpoint } from "../model/operations/ModifyEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyEndpointInput } from "../types/ModifyEndpointInput";
import { ModifyEndpointOutput } from "../types/ModifyEndpointOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/ModifyEndpointInput";
export * from "../types/ModifyEndpointOutput";
export * from "../types/ModifyEndpointExceptionsUnion";

export class ModifyEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyEndpointInput,
      OutputTypesUnion,
      ModifyEndpointOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyEndpointInput,
    ModifyEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyEndpointInput, ModifyEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyEndpointInput, ModifyEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
