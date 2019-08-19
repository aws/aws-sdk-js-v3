import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBotVersions } from "../model/operations/GetBotVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBotVersionsInput } from "../types/GetBotVersionsInput";
import { GetBotVersionsOutput } from "../types/GetBotVersionsOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetBotVersionsInput";
export * from "../types/GetBotVersionsOutput";
export * from "../types/GetBotVersionsExceptionsUnion";

export class GetBotVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBotVersionsInput,
      OutputTypesUnion,
      GetBotVersionsOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetBotVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBotVersionsInput,
    GetBotVersionsOutput,
    Blob
  >();

  constructor(readonly input: GetBotVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBotVersionsInput, GetBotVersionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBotVersionsInput, GetBotVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
