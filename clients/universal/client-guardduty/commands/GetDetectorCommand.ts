import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDetector } from "../model/GetDetector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDetectorInput } from "../types/GetDetectorInput";
import { GetDetectorOutput } from "../types/GetDetectorOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/GetDetectorInput";
export * from "../types/GetDetectorOutput";
export * from "../types/GetDetectorExceptionsUnion";

export class GetDetectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDetectorInput,
      OutputTypesUnion,
      GetDetectorOutput,
      GuardDutyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDetector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDetectorInput,
    GetDetectorOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDetectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDetectorInput, GetDetectorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDetectorInput, GetDetectorOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
