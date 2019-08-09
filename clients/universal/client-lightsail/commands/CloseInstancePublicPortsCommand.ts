import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CloseInstancePublicPorts } from "../model/CloseInstancePublicPorts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CloseInstancePublicPortsInput } from "../types/CloseInstancePublicPortsInput";
import { CloseInstancePublicPortsOutput } from "../types/CloseInstancePublicPortsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CloseInstancePublicPortsInput";
export * from "../types/CloseInstancePublicPortsOutput";
export * from "../types/CloseInstancePublicPortsExceptionsUnion";

export class CloseInstancePublicPortsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CloseInstancePublicPortsInput,
      OutputTypesUnion,
      CloseInstancePublicPortsOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CloseInstancePublicPorts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CloseInstancePublicPortsInput,
    CloseInstancePublicPortsOutput,
    Uint8Array
  >();

  constructor(readonly input: CloseInstancePublicPortsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CloseInstancePublicPortsInput,
    CloseInstancePublicPortsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CloseInstancePublicPortsInput, CloseInstancePublicPortsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
