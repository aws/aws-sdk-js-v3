import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDirectoryLimits } from "../model/GetDirectoryLimits";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDirectoryLimitsInput } from "../types/GetDirectoryLimitsInput";
import { GetDirectoryLimitsOutput } from "../types/GetDirectoryLimitsOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/GetDirectoryLimitsInput";
export * from "../types/GetDirectoryLimitsOutput";
export * from "../types/GetDirectoryLimitsExceptionsUnion";

export class GetDirectoryLimitsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDirectoryLimitsInput,
      OutputTypesUnion,
      GetDirectoryLimitsOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDirectoryLimits;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDirectoryLimitsInput,
    GetDirectoryLimitsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDirectoryLimitsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDirectoryLimitsInput,
    GetDirectoryLimitsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDirectoryLimitsInput, GetDirectoryLimitsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
