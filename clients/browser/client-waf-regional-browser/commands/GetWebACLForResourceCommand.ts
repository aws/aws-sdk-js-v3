import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetWebACLForResource } from "../model/GetWebACLForResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetWebACLForResourceInput } from "../types/GetWebACLForResourceInput";
import { GetWebACLForResourceOutput } from "../types/GetWebACLForResourceOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/GetWebACLForResourceInput";
export * from "../types/GetWebACLForResourceOutput";
export * from "../types/GetWebACLForResourceExceptionsUnion";

export class GetWebACLForResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetWebACLForResourceInput,
      OutputTypesUnion,
      GetWebACLForResourceOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = GetWebACLForResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetWebACLForResourceInput,
    GetWebACLForResourceOutput,
    Blob
  >();

  constructor(readonly input: GetWebACLForResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetWebACLForResourceInput,
    GetWebACLForResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetWebACLForResourceInput, GetWebACLForResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
