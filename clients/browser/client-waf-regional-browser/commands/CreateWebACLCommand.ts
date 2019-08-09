import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateWebACL } from "../model/CreateWebACL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateWebACLInput } from "../types/CreateWebACLInput";
import { CreateWebACLOutput } from "../types/CreateWebACLOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/CreateWebACLInput";
export * from "../types/CreateWebACLOutput";
export * from "../types/CreateWebACLExceptionsUnion";

export class CreateWebACLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateWebACLInput,
      OutputTypesUnion,
      CreateWebACLOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = CreateWebACL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateWebACLInput,
    CreateWebACLOutput,
    Blob
  >();

  constructor(readonly input: CreateWebACLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateWebACLInput, CreateWebACLOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateWebACLInput, CreateWebACLOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
