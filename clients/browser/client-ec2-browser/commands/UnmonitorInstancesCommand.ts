import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UnmonitorInstances } from "../model/UnmonitorInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnmonitorInstancesInput } from "../types/UnmonitorInstancesInput";
import { UnmonitorInstancesOutput } from "../types/UnmonitorInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/UnmonitorInstancesInput";
export * from "../types/UnmonitorInstancesOutput";
export * from "../types/UnmonitorInstancesExceptionsUnion";

export class UnmonitorInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnmonitorInstancesInput,
      OutputTypesUnion,
      UnmonitorInstancesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = UnmonitorInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnmonitorInstancesInput,
    UnmonitorInstancesOutput,
    Blob
  >();

  constructor(readonly input: UnmonitorInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UnmonitorInstancesInput,
    UnmonitorInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnmonitorInstancesInput, UnmonitorInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
