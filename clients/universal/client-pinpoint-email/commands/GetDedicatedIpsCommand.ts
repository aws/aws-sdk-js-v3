import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDedicatedIps } from "../model/GetDedicatedIps";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDedicatedIpsInput } from "../types/GetDedicatedIpsInput";
import { GetDedicatedIpsOutput } from "../types/GetDedicatedIpsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetDedicatedIpsInput";
export * from "../types/GetDedicatedIpsOutput";
export * from "../types/GetDedicatedIpsExceptionsUnion";

export class GetDedicatedIpsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDedicatedIpsInput,
      OutputTypesUnion,
      GetDedicatedIpsOutput,
      PinpointEmailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDedicatedIps;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDedicatedIpsInput,
    GetDedicatedIpsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDedicatedIpsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDedicatedIpsInput, GetDedicatedIpsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDedicatedIpsInput, GetDedicatedIpsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
