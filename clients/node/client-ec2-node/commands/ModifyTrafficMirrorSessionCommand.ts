import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyTrafficMirrorSession } from "../model/ModifyTrafficMirrorSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyTrafficMirrorSessionInput } from "../types/ModifyTrafficMirrorSessionInput";
import { ModifyTrafficMirrorSessionOutput } from "../types/ModifyTrafficMirrorSessionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyTrafficMirrorSessionInput";
export * from "../types/ModifyTrafficMirrorSessionOutput";
export * from "../types/ModifyTrafficMirrorSessionExceptionsUnion";

export class ModifyTrafficMirrorSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyTrafficMirrorSessionInput,
      OutputTypesUnion,
      ModifyTrafficMirrorSessionOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyTrafficMirrorSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyTrafficMirrorSessionInput,
    ModifyTrafficMirrorSessionOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyTrafficMirrorSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyTrafficMirrorSessionInput,
    ModifyTrafficMirrorSessionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyTrafficMirrorSessionInput,
        ModifyTrafficMirrorSessionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
