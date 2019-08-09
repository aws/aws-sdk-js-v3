import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApps } from "../model/GetApps";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAppsInput } from "../types/GetAppsInput";
import { GetAppsOutput } from "../types/GetAppsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetAppsInput";
export * from "../types/GetAppsOutput";
export * from "../types/GetAppsExceptionsUnion";

export class GetAppsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAppsInput,
      OutputTypesUnion,
      GetAppsOutput,
      PinpointResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetApps;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAppsInput,
    GetAppsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetAppsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAppsInput, GetAppsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAppsInput, GetAppsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
