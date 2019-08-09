import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateInstances } from "../model/CreateInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInstancesInput } from "../types/CreateInstancesInput";
import { CreateInstancesOutput } from "../types/CreateInstancesOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateInstancesInput";
export * from "../types/CreateInstancesOutput";
export * from "../types/CreateInstancesExceptionsUnion";

export class CreateInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInstancesInput,
      OutputTypesUnion,
      CreateInstancesOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInstancesInput,
    CreateInstancesOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateInstancesInput, CreateInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInstancesInput, CreateInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
