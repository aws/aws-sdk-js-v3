import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyDBClusterEndpoint } from "../model/ModifyDBClusterEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBClusterEndpointInput } from "../types/ModifyDBClusterEndpointInput";
import { ModifyDBClusterEndpointOutput } from "../types/ModifyDBClusterEndpointOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ModifyDBClusterEndpointInput";
export * from "../types/ModifyDBClusterEndpointOutput";
export * from "../types/ModifyDBClusterEndpointExceptionsUnion";

export class ModifyDBClusterEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDBClusterEndpointInput,
      OutputTypesUnion,
      ModifyDBClusterEndpointOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyDBClusterEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBClusterEndpointInput,
    ModifyDBClusterEndpointOutput,
    Blob
  >();

  constructor(readonly input: ModifyDBClusterEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyDBClusterEndpointInput,
    ModifyDBClusterEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyDBClusterEndpointInput, ModifyDBClusterEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
