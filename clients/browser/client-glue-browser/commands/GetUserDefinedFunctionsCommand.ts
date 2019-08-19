import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUserDefinedFunctions } from "../model/operations/GetUserDefinedFunctions";
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
      Blob
    > {
  readonly model = GetUserDefinedFunctions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUserDefinedFunctionsInput,
    GetUserDefinedFunctionsOutput,
    Blob
  >();

  constructor(readonly input: GetUserDefinedFunctionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
