import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetectStackResourceDrift } from "../model/operations/DetectStackResourceDrift";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectStackResourceDriftInput } from "../types/DetectStackResourceDriftInput";
import { DetectStackResourceDriftOutput } from "../types/DetectStackResourceDriftOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/DetectStackResourceDriftInput";
export * from "../types/DetectStackResourceDriftOutput";
export * from "../types/DetectStackResourceDriftExceptionsUnion";

export class DetectStackResourceDriftCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectStackResourceDriftInput,
      OutputTypesUnion,
      DetectStackResourceDriftOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = DetectStackResourceDrift;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectStackResourceDriftInput,
    DetectStackResourceDriftOutput,
    Blob
  >();

  constructor(readonly input: DetectStackResourceDriftInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetectStackResourceDriftInput,
    DetectStackResourceDriftOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectStackResourceDriftInput, DetectStackResourceDriftOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
