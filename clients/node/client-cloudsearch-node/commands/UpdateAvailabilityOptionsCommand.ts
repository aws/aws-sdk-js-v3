import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAvailabilityOptions } from "../model/UpdateAvailabilityOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAvailabilityOptionsInput } from "../types/UpdateAvailabilityOptionsInput";
import { UpdateAvailabilityOptionsOutput } from "../types/UpdateAvailabilityOptionsOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/UpdateAvailabilityOptionsInput";
export * from "../types/UpdateAvailabilityOptionsOutput";
export * from "../types/UpdateAvailabilityOptionsExceptionsUnion";

export class UpdateAvailabilityOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAvailabilityOptionsInput,
      OutputTypesUnion,
      UpdateAvailabilityOptionsOutput,
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAvailabilityOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAvailabilityOptionsInput,
    UpdateAvailabilityOptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAvailabilityOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAvailabilityOptionsInput,
    UpdateAvailabilityOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAvailabilityOptionsInput, UpdateAvailabilityOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
