import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EstimateTemplateCost } from "../model/operations/EstimateTemplateCost";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EstimateTemplateCostInput } from "../types/EstimateTemplateCostInput";
import { EstimateTemplateCostOutput } from "../types/EstimateTemplateCostOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/EstimateTemplateCostInput";
export * from "../types/EstimateTemplateCostOutput";
export * from "../types/EstimateTemplateCostExceptionsUnion";

export class EstimateTemplateCostCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EstimateTemplateCostInput,
      OutputTypesUnion,
      EstimateTemplateCostOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EstimateTemplateCost;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EstimateTemplateCostInput,
    EstimateTemplateCostOutput,
    _stream.Readable
  >();

  constructor(readonly input: EstimateTemplateCostInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EstimateTemplateCostInput,
    EstimateTemplateCostOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EstimateTemplateCostInput, EstimateTemplateCostOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
