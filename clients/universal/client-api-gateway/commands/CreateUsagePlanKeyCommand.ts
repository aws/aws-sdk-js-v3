import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateUsagePlanKey } from "../model/CreateUsagePlanKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUsagePlanKeyInput } from "../types/CreateUsagePlanKeyInput";
import { CreateUsagePlanKeyOutput } from "../types/CreateUsagePlanKeyOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateUsagePlanKeyInput";
export * from "../types/CreateUsagePlanKeyOutput";
export * from "../types/CreateUsagePlanKeyExceptionsUnion";

export class CreateUsagePlanKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUsagePlanKeyInput,
      OutputTypesUnion,
      CreateUsagePlanKeyOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateUsagePlanKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUsagePlanKeyInput,
    CreateUsagePlanKeyOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateUsagePlanKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateUsagePlanKeyInput,
    CreateUsagePlanKeyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateUsagePlanKeyInput, CreateUsagePlanKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
