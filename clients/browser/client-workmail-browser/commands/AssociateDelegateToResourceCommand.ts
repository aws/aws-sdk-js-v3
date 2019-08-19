import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateDelegateToResource } from "../model/operations/AssociateDelegateToResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateDelegateToResourceInput } from "../types/AssociateDelegateToResourceInput";
import { AssociateDelegateToResourceOutput } from "../types/AssociateDelegateToResourceOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/AssociateDelegateToResourceInput";
export * from "../types/AssociateDelegateToResourceOutput";
export * from "../types/AssociateDelegateToResourceExceptionsUnion";

export class AssociateDelegateToResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateDelegateToResourceInput,
      OutputTypesUnion,
      AssociateDelegateToResourceOutput,
      WorkMailResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateDelegateToResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateDelegateToResourceInput,
    AssociateDelegateToResourceOutput,
    Blob
  >();

  constructor(readonly input: AssociateDelegateToResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateDelegateToResourceInput,
    AssociateDelegateToResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateDelegateToResourceInput,
        AssociateDelegateToResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
