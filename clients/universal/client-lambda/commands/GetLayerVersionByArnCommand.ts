import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLayerVersionByArn } from "../model/GetLayerVersionByArn";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLayerVersionByArnInput } from "../types/GetLayerVersionByArnInput";
import { GetLayerVersionByArnOutput } from "../types/GetLayerVersionByArnOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/GetLayerVersionByArnInput";
export * from "../types/GetLayerVersionByArnOutput";
export * from "../types/GetLayerVersionByArnExceptionsUnion";

export class GetLayerVersionByArnCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLayerVersionByArnInput,
      OutputTypesUnion,
      GetLayerVersionByArnOutput,
      LambdaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetLayerVersionByArn;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLayerVersionByArnInput,
    GetLayerVersionByArnOutput,
    Uint8Array
  >();

  constructor(readonly input: GetLayerVersionByArnInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLayerVersionByArnInput,
    GetLayerVersionByArnOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLayerVersionByArnInput, GetLayerVersionByArnOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
