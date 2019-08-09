import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { OpenInstancePublicPorts } from "../model/OpenInstancePublicPorts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { OpenInstancePublicPortsInput } from "../types/OpenInstancePublicPortsInput";
import { OpenInstancePublicPortsOutput } from "../types/OpenInstancePublicPortsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/OpenInstancePublicPortsInput";
export * from "../types/OpenInstancePublicPortsOutput";
export * from "../types/OpenInstancePublicPortsExceptionsUnion";

export class OpenInstancePublicPortsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      OpenInstancePublicPortsInput,
      OutputTypesUnion,
      OpenInstancePublicPortsOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = OpenInstancePublicPorts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    OpenInstancePublicPortsInput,
    OpenInstancePublicPortsOutput,
    Uint8Array
  >();

  constructor(readonly input: OpenInstancePublicPortsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    OpenInstancePublicPortsInput,
    OpenInstancePublicPortsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<OpenInstancePublicPortsInput, OpenInstancePublicPortsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
