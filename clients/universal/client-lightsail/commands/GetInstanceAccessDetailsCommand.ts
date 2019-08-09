import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetInstanceAccessDetails } from "../model/GetInstanceAccessDetails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstanceAccessDetailsInput } from "../types/GetInstanceAccessDetailsInput";
import { GetInstanceAccessDetailsOutput } from "../types/GetInstanceAccessDetailsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetInstanceAccessDetailsInput";
export * from "../types/GetInstanceAccessDetailsOutput";
export * from "../types/GetInstanceAccessDetailsExceptionsUnion";

export class GetInstanceAccessDetailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstanceAccessDetailsInput,
      OutputTypesUnion,
      GetInstanceAccessDetailsOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetInstanceAccessDetails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstanceAccessDetailsInput,
    GetInstanceAccessDetailsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetInstanceAccessDetailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetInstanceAccessDetailsInput,
    GetInstanceAccessDetailsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstanceAccessDetailsInput, GetInstanceAccessDetailsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
