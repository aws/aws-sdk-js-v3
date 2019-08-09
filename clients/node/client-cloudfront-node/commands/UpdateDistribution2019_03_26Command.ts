import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDistribution2019_03_26 } from "../model/UpdateDistribution2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDistribution2019_03_26Input } from "../types/UpdateDistribution2019_03_26Input";
import { UpdateDistribution2019_03_26Output } from "../types/UpdateDistribution2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdateDistribution2019_03_26Input";
export * from "../types/UpdateDistribution2019_03_26Output";
export * from "../types/UpdateDistribution2019_03_26ExceptionsUnion";

export class UpdateDistribution2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDistribution2019_03_26Input,
      OutputTypesUnion,
      UpdateDistribution2019_03_26Output,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDistribution2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDistribution2019_03_26Input,
    UpdateDistribution2019_03_26Output,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDistribution2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDistribution2019_03_26Input,
    UpdateDistribution2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateDistribution2019_03_26Input,
        UpdateDistribution2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
