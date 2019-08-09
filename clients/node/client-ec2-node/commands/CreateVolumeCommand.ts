import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateVolume } from "../model/CreateVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVolumeInput } from "../types/CreateVolumeInput";
import { CreateVolumeOutput } from "../types/CreateVolumeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateVolumeInput";
export * from "../types/CreateVolumeOutput";
export * from "../types/CreateVolumeExceptionsUnion";

export class CreateVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVolumeInput,
      OutputTypesUnion,
      CreateVolumeOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVolumeInput,
    CreateVolumeOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateVolumeInput, CreateVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVolumeInput, CreateVolumeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
