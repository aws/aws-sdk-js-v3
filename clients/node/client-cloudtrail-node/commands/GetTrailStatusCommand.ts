import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTrailStatus } from "../model/GetTrailStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTrailStatusInput } from "../types/GetTrailStatusInput";
import { GetTrailStatusOutput } from "../types/GetTrailStatusOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/GetTrailStatusInput";
export * from "../types/GetTrailStatusOutput";
export * from "../types/GetTrailStatusExceptionsUnion";

export class GetTrailStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTrailStatusInput,
      OutputTypesUnion,
      GetTrailStatusOutput,
      CloudTrailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTrailStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTrailStatusInput,
    GetTrailStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTrailStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTrailStatusInput, GetTrailStatusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTrailStatusInput, GetTrailStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
