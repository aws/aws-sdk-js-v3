import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetExportJob } from "../model/GetExportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetExportJobInput } from "../types/GetExportJobInput";
import { GetExportJobOutput } from "../types/GetExportJobOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetExportJobInput";
export * from "../types/GetExportJobOutput";
export * from "../types/GetExportJobExceptionsUnion";

export class GetExportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetExportJobInput,
      OutputTypesUnion,
      GetExportJobOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetExportJobInput,
    GetExportJobOutput,
    Blob
  >();

  constructor(readonly input: GetExportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetExportJobInput, GetExportJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetExportJob
    };

    return stack.resolve(
      handler<GetExportJobInput, GetExportJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
