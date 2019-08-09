import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAccountLimit } from "../model/GetAccountLimit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAccountLimitInput } from "../types/GetAccountLimitInput";
import { GetAccountLimitOutput } from "../types/GetAccountLimitOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetAccountLimitInput";
export * from "../types/GetAccountLimitOutput";
export * from "../types/GetAccountLimitExceptionsUnion";

export class GetAccountLimitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAccountLimitInput,
      OutputTypesUnion,
      GetAccountLimitOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = GetAccountLimit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAccountLimitInput,
    GetAccountLimitOutput,
    Blob
  >();

  constructor(readonly input: GetAccountLimitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAccountLimitInput, GetAccountLimitOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAccountLimitInput, GetAccountLimitOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
