import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEntities } from "../model/GetEntities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEntitiesInput } from "../types/GetEntitiesInput";
import { GetEntitiesOutput } from "../types/GetEntitiesOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/GetEntitiesInput";
export * from "../types/GetEntitiesOutput";
export * from "../types/GetEntitiesExceptionsUnion";

export class GetEntitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEntitiesInput,
      OutputTypesUnion,
      GetEntitiesOutput,
      IoTThingsGraphResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetEntities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEntitiesInput,
    GetEntitiesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetEntitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<GetEntitiesInput, GetEntitiesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEntitiesInput, GetEntitiesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
