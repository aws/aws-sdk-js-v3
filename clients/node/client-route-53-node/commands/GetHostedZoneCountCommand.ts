import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetHostedZoneCount } from "../model/operations/GetHostedZoneCount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHostedZoneCountInput } from "../types/GetHostedZoneCountInput";
import { GetHostedZoneCountOutput } from "../types/GetHostedZoneCountOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetHostedZoneCountInput";
export * from "../types/GetHostedZoneCountOutput";
export * from "../types/GetHostedZoneCountExceptionsUnion";

export class GetHostedZoneCountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHostedZoneCountInput,
      OutputTypesUnion,
      GetHostedZoneCountOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetHostedZoneCount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHostedZoneCountInput,
    GetHostedZoneCountOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetHostedZoneCountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetHostedZoneCountInput,
    GetHostedZoneCountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetHostedZoneCountInput, GetHostedZoneCountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
