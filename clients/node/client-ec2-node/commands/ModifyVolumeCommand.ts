import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyVolume } from "../model/ModifyVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyVolumeInput } from "../types/ModifyVolumeInput";
import { ModifyVolumeOutput } from "../types/ModifyVolumeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyVolumeInput";
export * from "../types/ModifyVolumeOutput";
export * from "../types/ModifyVolumeExceptionsUnion";

export class ModifyVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyVolumeInput,
      OutputTypesUnion,
      ModifyVolumeOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVolumeInput,
    ModifyVolumeOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyVolumeInput, ModifyVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyVolumeInput, ModifyVolumeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
