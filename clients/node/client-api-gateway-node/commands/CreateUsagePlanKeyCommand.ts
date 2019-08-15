import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateUsagePlanKey } from "../model/operations/CreateUsagePlanKey";
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
      _stream.Readable
    > {
  readonly model = CreateUsagePlanKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUsagePlanKeyInput,
    CreateUsagePlanKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateUsagePlanKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
