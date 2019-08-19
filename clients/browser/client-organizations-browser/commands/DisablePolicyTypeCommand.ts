import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisablePolicyType } from "../model/operations/DisablePolicyType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisablePolicyTypeInput } from "../types/DisablePolicyTypeInput";
import { DisablePolicyTypeOutput } from "../types/DisablePolicyTypeOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DisablePolicyTypeInput";
export * from "../types/DisablePolicyTypeOutput";
export * from "../types/DisablePolicyTypeExceptionsUnion";

export class DisablePolicyTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisablePolicyTypeInput,
      OutputTypesUnion,
      DisablePolicyTypeOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = DisablePolicyType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisablePolicyTypeInput,
    DisablePolicyTypeOutput,
    Blob
  >();

  constructor(readonly input: DisablePolicyTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<DisablePolicyTypeInput, DisablePolicyTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisablePolicyTypeInput, DisablePolicyTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
