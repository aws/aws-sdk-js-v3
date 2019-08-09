import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_modeled_endpoint_middleware from "@aws-sdk/modeled-endpoint-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as __aws_sdk_url_parser_node from "@aws-sdk/url-parser-node";
import * as _stream from "stream";
import { Predict } from "../model/Predict";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PredictInput } from "../types/PredictInput";
import { PredictOutput } from "../types/PredictOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/PredictInput";
export * from "../types/PredictOutput";
export * from "../types/PredictExceptionsUnion";

export class PredictCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PredictInput,
      OutputTypesUnion,
      PredictOutput,
      MachineLearningResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = Predict;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PredictInput,
    PredictOutput,
    _stream.Readable
  >();

  constructor(readonly input: PredictInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<PredictInput, PredictOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_modeled_endpoint_middleware.modeledEndpointMiddleware<
        PredictInput
      >(configuration.urlParser, "PredictEndpoint"),
      {
        step: "build",
        priority: 50,
        tags: { APPLY_PREDICT_ENDPOINT: true }
      }
    );
    return stack.resolve(
      handler<PredictInput, PredictOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
