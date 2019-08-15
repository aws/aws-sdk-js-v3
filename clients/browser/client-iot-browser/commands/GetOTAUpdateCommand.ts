import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetOTAUpdate } from "../model/operations/GetOTAUpdate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOTAUpdateInput } from "../types/GetOTAUpdateInput";
import { GetOTAUpdateOutput } from "../types/GetOTAUpdateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/GetOTAUpdateInput";
export * from "../types/GetOTAUpdateOutput";
export * from "../types/GetOTAUpdateExceptionsUnion";

export class GetOTAUpdateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOTAUpdateInput,
      OutputTypesUnion,
      GetOTAUpdateOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = GetOTAUpdate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOTAUpdateInput,
    GetOTAUpdateOutput,
    Blob
  >();

  constructor(readonly input: GetOTAUpdateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<GetOTAUpdateInput, GetOTAUpdateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOTAUpdateInput, GetOTAUpdateOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
