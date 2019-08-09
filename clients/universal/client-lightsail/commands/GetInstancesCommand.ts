import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetInstances } from "../model/GetInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstancesInput } from "../types/GetInstancesInput";
import { GetInstancesOutput } from "../types/GetInstancesOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetInstancesInput";
export * from "../types/GetInstancesOutput";
export * from "../types/GetInstancesExceptionsUnion";

export class GetInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstancesInput,
      OutputTypesUnion,
      GetInstancesOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstancesInput,
    GetInstancesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetInstancesInput, GetInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstancesInput, GetInstancesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
