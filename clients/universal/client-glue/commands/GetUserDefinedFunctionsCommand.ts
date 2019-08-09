import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUserDefinedFunctions } from "../model/GetUserDefinedFunctions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUserDefinedFunctionsInput } from "../types/GetUserDefinedFunctionsInput";
import { GetUserDefinedFunctionsOutput } from "../types/GetUserDefinedFunctionsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetUserDefinedFunctionsInput";
export * from "../types/GetUserDefinedFunctionsOutput";
export * from "../types/GetUserDefinedFunctionsExceptionsUnion";

export class GetUserDefinedFunctionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUserDefinedFunctionsInput,
      OutputTypesUnion,
      GetUserDefinedFunctionsOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetUserDefinedFunctions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUserDefinedFunctionsInput,
    GetUserDefinedFunctionsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetUserDefinedFunctionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetUserDefinedFunctionsInput,
    GetUserDefinedFunctionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUserDefinedFunctionsInput, GetUserDefinedFunctionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
