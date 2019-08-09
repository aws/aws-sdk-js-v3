import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = GetApps;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAppsInput,
    GetAppsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAppsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
