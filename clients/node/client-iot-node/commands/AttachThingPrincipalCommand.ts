import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachThingPrincipal } from "../model/operations/AttachThingPrincipal";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachThingPrincipalInput } from "../types/AttachThingPrincipalInput";
import { AttachThingPrincipalOutput } from "../types/AttachThingPrincipalOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/AttachThingPrincipalInput";
export * from "../types/AttachThingPrincipalOutput";
export * from "../types/AttachThingPrincipalExceptionsUnion";

export class AttachThingPrincipalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachThingPrincipalInput,
      OutputTypesUnion,
      AttachThingPrincipalOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachThingPrincipal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachThingPrincipalInput,
    AttachThingPrincipalOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachThingPrincipalInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachThingPrincipalInput,
    AttachThingPrincipalOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachThingPrincipalInput, AttachThingPrincipalOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
