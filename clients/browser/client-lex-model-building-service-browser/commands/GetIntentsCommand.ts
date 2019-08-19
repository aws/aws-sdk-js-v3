import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIntents } from "../model/operations/GetIntents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIntentsInput } from "../types/GetIntentsInput";
import { GetIntentsOutput } from "../types/GetIntentsOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetIntentsInput";
export * from "../types/GetIntentsOutput";
export * from "../types/GetIntentsExceptionsUnion";

export class GetIntentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIntentsInput,
      OutputTypesUnion,
      GetIntentsOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetIntents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIntentsInput,
    GetIntentsOutput,
    Blob
  >();

  constructor(readonly input: GetIntentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetIntentsInput, GetIntentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIntentsInput, GetIntentsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
