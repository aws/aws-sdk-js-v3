import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RebootInstance } from "../model/RebootInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebootInstanceInput } from "../types/RebootInstanceInput";
import { RebootInstanceOutput } from "../types/RebootInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/RebootInstanceInput";
export * from "../types/RebootInstanceOutput";
export * from "../types/RebootInstanceExceptionsUnion";

export class RebootInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebootInstanceInput,
      OutputTypesUnion,
      RebootInstanceOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = RebootInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootInstanceInput,
    RebootInstanceOutput,
    Blob
  >();

  constructor(readonly input: RebootInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<RebootInstanceInput, RebootInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebootInstanceInput, RebootInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
