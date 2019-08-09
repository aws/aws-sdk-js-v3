import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUsagePlanKey } from "../model/GetUsagePlanKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUsagePlanKeyInput } from "../types/GetUsagePlanKeyInput";
import { GetUsagePlanKeyOutput } from "../types/GetUsagePlanKeyOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetUsagePlanKeyInput";
export * from "../types/GetUsagePlanKeyOutput";
export * from "../types/GetUsagePlanKeyExceptionsUnion";

export class GetUsagePlanKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUsagePlanKeyInput,
      OutputTypesUnion,
      GetUsagePlanKeyOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetUsagePlanKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUsagePlanKeyInput,
    GetUsagePlanKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUsagePlanKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUsagePlanKeyInput, GetUsagePlanKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUsagePlanKeyInput, GetUsagePlanKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
