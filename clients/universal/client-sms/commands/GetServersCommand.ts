import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetServers } from "../model/GetServers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServersInput } from "../types/GetServersInput";
import { GetServersOutput } from "../types/GetServersOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/GetServersInput";
export * from "../types/GetServersOutput";
export * from "../types/GetServersExceptionsUnion";

export class GetServersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServersInput,
      OutputTypesUnion,
      GetServersOutput,
      SMSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetServers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServersInput,
    GetServersOutput,
    Uint8Array
  >();

  constructor(readonly input: GetServersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<GetServersInput, GetServersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetServersInput, GetServersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
