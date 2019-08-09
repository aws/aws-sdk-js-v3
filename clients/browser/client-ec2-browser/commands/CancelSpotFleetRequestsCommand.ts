import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelSpotFleetRequests } from "../model/CancelSpotFleetRequests";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelSpotFleetRequestsInput } from "../types/CancelSpotFleetRequestsInput";
import { CancelSpotFleetRequestsOutput } from "../types/CancelSpotFleetRequestsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CancelSpotFleetRequestsInput";
export * from "../types/CancelSpotFleetRequestsOutput";
export * from "../types/CancelSpotFleetRequestsExceptionsUnion";

export class CancelSpotFleetRequestsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelSpotFleetRequestsInput,
      OutputTypesUnion,
      CancelSpotFleetRequestsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CancelSpotFleetRequests;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelSpotFleetRequestsInput,
    CancelSpotFleetRequestsOutput,
    Blob
  >();

  constructor(readonly input: CancelSpotFleetRequestsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelSpotFleetRequestsInput,
    CancelSpotFleetRequestsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelSpotFleetRequestsInput, CancelSpotFleetRequestsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
