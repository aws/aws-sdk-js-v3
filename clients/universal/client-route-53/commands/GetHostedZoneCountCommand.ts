import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetHostedZoneCount } from "../model/GetHostedZoneCount";
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
      Uint8Array
    > {
  readonly model = GetHostedZoneCount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHostedZoneCountInput,
    GetHostedZoneCountOutput,
    Uint8Array
  >();

  constructor(readonly input: GetHostedZoneCountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
