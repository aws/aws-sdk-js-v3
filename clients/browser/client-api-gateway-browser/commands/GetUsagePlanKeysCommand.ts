import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUsagePlanKeys } from "../model/operations/GetUsagePlanKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUsagePlanKeysInput } from "../types/GetUsagePlanKeysInput";
import { GetUsagePlanKeysOutput } from "../types/GetUsagePlanKeysOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetUsagePlanKeysInput";
export * from "../types/GetUsagePlanKeysOutput";
export * from "../types/GetUsagePlanKeysExceptionsUnion";

export class GetUsagePlanKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUsagePlanKeysInput,
      OutputTypesUnion,
      GetUsagePlanKeysOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetUsagePlanKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUsagePlanKeysInput,
    GetUsagePlanKeysOutput,
    Blob
  >();

  constructor(readonly input: GetUsagePlanKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUsagePlanKeysInput, GetUsagePlanKeysOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUsagePlanKeysInput, GetUsagePlanKeysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
