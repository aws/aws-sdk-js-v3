import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachThingPrincipal } from "../model/DetachThingPrincipal";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachThingPrincipalInput } from "../types/DetachThingPrincipalInput";
import { DetachThingPrincipalOutput } from "../types/DetachThingPrincipalOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DetachThingPrincipalInput";
export * from "../types/DetachThingPrincipalOutput";
export * from "../types/DetachThingPrincipalExceptionsUnion";

export class DetachThingPrincipalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachThingPrincipalInput,
      OutputTypesUnion,
      DetachThingPrincipalOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachThingPrincipal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachThingPrincipalInput,
    DetachThingPrincipalOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachThingPrincipalInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachThingPrincipalInput,
    DetachThingPrincipalOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachThingPrincipalInput, DetachThingPrincipalOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
