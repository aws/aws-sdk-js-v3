import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifySpotFleetRequest } from "../model/ModifySpotFleetRequest";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifySpotFleetRequestInput } from "../types/ModifySpotFleetRequestInput";
import { ModifySpotFleetRequestOutput } from "../types/ModifySpotFleetRequestOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifySpotFleetRequestInput";
export * from "../types/ModifySpotFleetRequestOutput";
export * from "../types/ModifySpotFleetRequestExceptionsUnion";

export class ModifySpotFleetRequestCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifySpotFleetRequestInput,
      OutputTypesUnion,
      ModifySpotFleetRequestOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifySpotFleetRequest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifySpotFleetRequestInput,
    ModifySpotFleetRequestOutput,
    Blob
  >();

  constructor(readonly input: ModifySpotFleetRequestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifySpotFleetRequestInput,
    ModifySpotFleetRequestOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifySpotFleetRequestInput, ModifySpotFleetRequestOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
