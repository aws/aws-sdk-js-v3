import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyVolumeAttribute } from "../model/ModifyVolumeAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyVolumeAttributeInput } from "../types/ModifyVolumeAttributeInput";
import { ModifyVolumeAttributeOutput } from "../types/ModifyVolumeAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyVolumeAttributeInput";
export * from "../types/ModifyVolumeAttributeOutput";
export * from "../types/ModifyVolumeAttributeExceptionsUnion";

export class ModifyVolumeAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyVolumeAttributeInput,
      OutputTypesUnion,
      ModifyVolumeAttributeOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyVolumeAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVolumeAttributeInput,
    ModifyVolumeAttributeOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyVolumeAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyVolumeAttributeInput,
    ModifyVolumeAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyVolumeAttributeInput, ModifyVolumeAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
