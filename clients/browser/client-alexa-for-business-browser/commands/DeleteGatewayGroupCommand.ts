import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteGatewayGroup } from "../model/operations/DeleteGatewayGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGatewayGroupInput } from "../types/DeleteGatewayGroupInput";
import { DeleteGatewayGroupOutput } from "../types/DeleteGatewayGroupOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteGatewayGroupInput";
export * from "../types/DeleteGatewayGroupOutput";
export * from "../types/DeleteGatewayGroupExceptionsUnion";

export class DeleteGatewayGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGatewayGroupInput,
      OutputTypesUnion,
      DeleteGatewayGroupOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteGatewayGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGatewayGroupInput,
    DeleteGatewayGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteGatewayGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteGatewayGroupInput,
    DeleteGatewayGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGatewayGroupInput, DeleteGatewayGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
