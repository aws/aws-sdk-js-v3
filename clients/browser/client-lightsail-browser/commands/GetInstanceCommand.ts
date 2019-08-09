import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetInstance } from "../model/GetInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstanceInput } from "../types/GetInstanceInput";
import { GetInstanceOutput } from "../types/GetInstanceOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetInstanceInput";
export * from "../types/GetInstanceOutput";
export * from "../types/GetInstanceExceptionsUnion";

export class GetInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstanceInput,
      OutputTypesUnion,
      GetInstanceOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstanceInput,
    GetInstanceOutput,
    Blob
  >();

  constructor(readonly input: GetInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetInstanceInput, GetInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstanceInput, GetInstanceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
