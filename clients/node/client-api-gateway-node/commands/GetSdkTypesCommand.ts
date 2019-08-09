import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSdkTypes } from "../model/GetSdkTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSdkTypesInput } from "../types/GetSdkTypesInput";
import { GetSdkTypesOutput } from "../types/GetSdkTypesOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetSdkTypesInput";
export * from "../types/GetSdkTypesOutput";
export * from "../types/GetSdkTypesExceptionsUnion";

export class GetSdkTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSdkTypesInput,
      OutputTypesUnion,
      GetSdkTypesOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSdkTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSdkTypesInput,
    GetSdkTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSdkTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSdkTypesInput, GetSdkTypesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSdkTypesInput, GetSdkTypesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
