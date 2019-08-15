import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetJob } from "../model/operations/GetJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobInput } from "../types/GetJobInput";
import { GetJobOutput } from "../types/GetJobOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/GetJobInput";
export * from "../types/GetJobOutput";
export * from "../types/GetJobExceptionsUnion";

export class GetJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobInput,
      OutputTypesUnion,
      GetJobOutput,
      AmplifyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobInput,
    GetJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobInput, GetJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobInput, GetJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
