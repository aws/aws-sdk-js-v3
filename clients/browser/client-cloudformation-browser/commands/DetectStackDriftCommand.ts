import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetectStackDrift } from "../model/operations/DetectStackDrift";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectStackDriftInput } from "../types/DetectStackDriftInput";
import { DetectStackDriftOutput } from "../types/DetectStackDriftOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DetectStackDriftInput";
export * from "../types/DetectStackDriftOutput";
export * from "../types/DetectStackDriftExceptionsUnion";

export class DetectStackDriftCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectStackDriftInput,
      OutputTypesUnion,
      DetectStackDriftOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = DetectStackDrift;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectStackDriftInput,
    DetectStackDriftOutput,
    Blob
  >();

  constructor(readonly input: DetectStackDriftInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<DetectStackDriftInput, DetectStackDriftOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectStackDriftInput, DetectStackDriftOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
