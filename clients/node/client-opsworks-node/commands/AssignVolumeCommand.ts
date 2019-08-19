import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssignVolume } from "../model/operations/AssignVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssignVolumeInput } from "../types/AssignVolumeInput";
import { AssignVolumeOutput } from "../types/AssignVolumeOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/AssignVolumeInput";
export * from "../types/AssignVolumeOutput";
export * from "../types/AssignVolumeExceptionsUnion";

export class AssignVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssignVolumeInput,
      OutputTypesUnion,
      AssignVolumeOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssignVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssignVolumeInput,
    AssignVolumeOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssignVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<AssignVolumeInput, AssignVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssignVolumeInput, AssignVolumeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
