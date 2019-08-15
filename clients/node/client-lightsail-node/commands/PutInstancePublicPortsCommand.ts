import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutInstancePublicPorts } from "../model/operations/PutInstancePublicPorts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutInstancePublicPortsInput } from "../types/PutInstancePublicPortsInput";
import { PutInstancePublicPortsOutput } from "../types/PutInstancePublicPortsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/PutInstancePublicPortsInput";
export * from "../types/PutInstancePublicPortsOutput";
export * from "../types/PutInstancePublicPortsExceptionsUnion";

export class PutInstancePublicPortsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutInstancePublicPortsInput,
      OutputTypesUnion,
      PutInstancePublicPortsOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutInstancePublicPorts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutInstancePublicPortsInput,
    PutInstancePublicPortsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutInstancePublicPortsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutInstancePublicPortsInput,
    PutInstancePublicPortsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutInstancePublicPortsInput, PutInstancePublicPortsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
