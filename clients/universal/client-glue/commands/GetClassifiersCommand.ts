import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetClassifiers } from "../model/GetClassifiers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetClassifiersInput } from "../types/GetClassifiersInput";
import { GetClassifiersOutput } from "../types/GetClassifiersOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetClassifiersInput";
export * from "../types/GetClassifiersOutput";
export * from "../types/GetClassifiersExceptionsUnion";

export class GetClassifiersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetClassifiersInput,
      OutputTypesUnion,
      GetClassifiersOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetClassifiers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetClassifiersInput,
    GetClassifiersOutput,
    Uint8Array
  >();

  constructor(readonly input: GetClassifiersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetClassifiersInput, GetClassifiersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetClassifiersInput, GetClassifiersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
