import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutLifecycleConfiguration } from "../model/PutLifecycleConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutLifecycleConfigurationInput } from "../types/PutLifecycleConfigurationInput";
import { PutLifecycleConfigurationOutput } from "../types/PutLifecycleConfigurationOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
export * from "../types/PutLifecycleConfigurationInput";
export * from "../types/PutLifecycleConfigurationOutput";
export * from "../types/PutLifecycleConfigurationExceptionsUnion";

export class PutLifecycleConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutLifecycleConfigurationInput,
      OutputTypesUnion,
      PutLifecycleConfigurationOutput,
      EFSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutLifecycleConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutLifecycleConfigurationInput,
    PutLifecycleConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutLifecycleConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EFSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutLifecycleConfigurationInput,
    PutLifecycleConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutLifecycleConfigurationInput, PutLifecycleConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
