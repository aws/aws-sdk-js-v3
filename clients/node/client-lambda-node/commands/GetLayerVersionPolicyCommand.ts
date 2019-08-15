import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLayerVersionPolicy } from "../model/operations/GetLayerVersionPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLayerVersionPolicyInput } from "../types/GetLayerVersionPolicyInput";
import { GetLayerVersionPolicyOutput } from "../types/GetLayerVersionPolicyOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/GetLayerVersionPolicyInput";
export * from "../types/GetLayerVersionPolicyOutput";
export * from "../types/GetLayerVersionPolicyExceptionsUnion";

export class GetLayerVersionPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLayerVersionPolicyInput,
      OutputTypesUnion,
      GetLayerVersionPolicyOutput,
      LambdaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLayerVersionPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLayerVersionPolicyInput,
    GetLayerVersionPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLayerVersionPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLayerVersionPolicyInput,
    GetLayerVersionPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLayerVersionPolicyInput, GetLayerVersionPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
