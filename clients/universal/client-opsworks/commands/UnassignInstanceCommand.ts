import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UnassignInstance } from "../model/UnassignInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnassignInstanceInput } from "../types/UnassignInstanceInput";
import { UnassignInstanceOutput } from "../types/UnassignInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UnassignInstanceInput";
export * from "../types/UnassignInstanceOutput";
export * from "../types/UnassignInstanceExceptionsUnion";

export class UnassignInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnassignInstanceInput,
      OutputTypesUnion,
      UnassignInstanceOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UnassignInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnassignInstanceInput,
    UnassignInstanceOutput,
    Uint8Array
  >();

  constructor(readonly input: UnassignInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<UnassignInstanceInput, UnassignInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnassignInstanceInput, UnassignInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
