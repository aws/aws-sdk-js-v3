import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { Untag } from "../model/Untag";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagInput } from "../types/UntagInput";
import { UntagOutput } from "../types/UntagOutput";
import { ResourceGroupsResolvedConfiguration } from "../ResourceGroupsConfiguration";
export * from "../types/UntagInput";
export * from "../types/UntagOutput";
export * from "../types/UntagExceptionsUnion";

export class UntagCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagInput,
      OutputTypesUnion,
      UntagOutput,
      ResourceGroupsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = Untag;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagInput,
    UntagOutput,
    Uint8Array
  >();

  constructor(readonly input: UntagInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ResourceGroupsResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagInput, UntagOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagInput, UntagOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
