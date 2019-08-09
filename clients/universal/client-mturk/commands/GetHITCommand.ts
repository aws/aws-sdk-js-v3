import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetHIT } from "../model/GetHIT";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHITInput } from "../types/GetHITInput";
import { GetHITOutput } from "../types/GetHITOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/GetHITInput";
export * from "../types/GetHITOutput";
export * from "../types/GetHITExceptionsUnion";

export class GetHITCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHITInput,
      OutputTypesUnion,
      GetHITOutput,
      MTurkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetHIT;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHITInput,
    GetHITOutput,
    Uint8Array
  >();

  constructor(readonly input: GetHITInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<GetHITInput, GetHITOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetHITInput, GetHITOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
