import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRelationalDatabaseParameters } from "../model/UpdateRelationalDatabaseParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRelationalDatabaseParametersInput } from "../types/UpdateRelationalDatabaseParametersInput";
import { UpdateRelationalDatabaseParametersOutput } from "../types/UpdateRelationalDatabaseParametersOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/UpdateRelationalDatabaseParametersInput";
export * from "../types/UpdateRelationalDatabaseParametersOutput";
export * from "../types/UpdateRelationalDatabaseParametersExceptionsUnion";

export class UpdateRelationalDatabaseParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRelationalDatabaseParametersInput,
      OutputTypesUnion,
      UpdateRelationalDatabaseParametersOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateRelationalDatabaseParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRelationalDatabaseParametersInput,
    UpdateRelationalDatabaseParametersOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateRelationalDatabaseParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRelationalDatabaseParametersInput,
    UpdateRelationalDatabaseParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateRelationalDatabaseParametersInput,
        UpdateRelationalDatabaseParametersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
