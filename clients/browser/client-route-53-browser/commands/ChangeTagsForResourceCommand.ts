import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ChangeTagsForResource } from "../model/ChangeTagsForResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ChangeTagsForResourceInput } from "../types/ChangeTagsForResourceInput";
import { ChangeTagsForResourceOutput } from "../types/ChangeTagsForResourceOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ChangeTagsForResourceInput";
export * from "../types/ChangeTagsForResourceOutput";
export * from "../types/ChangeTagsForResourceExceptionsUnion";

export class ChangeTagsForResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ChangeTagsForResourceInput,
      OutputTypesUnion,
      ChangeTagsForResourceOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = ChangeTagsForResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ChangeTagsForResourceInput,
    ChangeTagsForResourceOutput,
    Blob
  >();

  constructor(readonly input: ChangeTagsForResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ChangeTagsForResourceInput,
    ChangeTagsForResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ChangeTagsForResourceInput, ChangeTagsForResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
