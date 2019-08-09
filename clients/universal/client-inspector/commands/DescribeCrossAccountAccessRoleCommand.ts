import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCrossAccountAccessRole } from "../model/DescribeCrossAccountAccessRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCrossAccountAccessRoleInput } from "../types/DescribeCrossAccountAccessRoleInput";
import { DescribeCrossAccountAccessRoleOutput } from "../types/DescribeCrossAccountAccessRoleOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DescribeCrossAccountAccessRoleInput";
export * from "../types/DescribeCrossAccountAccessRoleOutput";
export * from "../types/DescribeCrossAccountAccessRoleExceptionsUnion";

export class DescribeCrossAccountAccessRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCrossAccountAccessRoleInput,
      OutputTypesUnion,
      DescribeCrossAccountAccessRoleOutput,
      InspectorResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeCrossAccountAccessRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCrossAccountAccessRoleInput,
    DescribeCrossAccountAccessRoleOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeCrossAccountAccessRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCrossAccountAccessRoleInput,
    DescribeCrossAccountAccessRoleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeCrossAccountAccessRoleInput,
        DescribeCrossAccountAccessRoleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
