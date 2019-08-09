import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RebootInstances } from "../model/RebootInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebootInstancesInput } from "../types/RebootInstancesInput";
import { RebootInstancesOutput } from "../types/RebootInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RebootInstancesInput";
export * from "../types/RebootInstancesOutput";
export * from "../types/RebootInstancesExceptionsUnion";

export class RebootInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebootInstancesInput,
      OutputTypesUnion,
      RebootInstancesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = RebootInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootInstancesInput,
    RebootInstancesOutput,
    Blob
  >();

  constructor(readonly input: RebootInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<RebootInstancesInput, RebootInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebootInstancesInput, RebootInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
