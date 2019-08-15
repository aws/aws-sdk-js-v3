import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDedicatedIp } from "../model/operations/GetDedicatedIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDedicatedIpInput } from "../types/GetDedicatedIpInput";
import { GetDedicatedIpOutput } from "../types/GetDedicatedIpOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetDedicatedIpInput";
export * from "../types/GetDedicatedIpOutput";
export * from "../types/GetDedicatedIpExceptionsUnion";

export class GetDedicatedIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDedicatedIpInput,
      OutputTypesUnion,
      GetDedicatedIpOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = GetDedicatedIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDedicatedIpInput,
    GetDedicatedIpOutput,
    Blob
  >();

  constructor(readonly input: GetDedicatedIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDedicatedIpInput, GetDedicatedIpOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDedicatedIpInput, GetDedicatedIpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
