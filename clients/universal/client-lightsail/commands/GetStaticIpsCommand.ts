import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetStaticIps } from "../model/GetStaticIps";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetStaticIpsInput } from "../types/GetStaticIpsInput";
import { GetStaticIpsOutput } from "../types/GetStaticIpsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetStaticIpsInput";
export * from "../types/GetStaticIpsOutput";
export * from "../types/GetStaticIpsExceptionsUnion";

export class GetStaticIpsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetStaticIpsInput,
      OutputTypesUnion,
      GetStaticIpsOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetStaticIps;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetStaticIpsInput,
    GetStaticIpsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetStaticIpsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetStaticIpsInput, GetStaticIpsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetStaticIpsInput, GetStaticIpsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
