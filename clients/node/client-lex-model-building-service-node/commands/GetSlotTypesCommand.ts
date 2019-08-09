import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSlotTypes } from "../model/GetSlotTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSlotTypesInput } from "../types/GetSlotTypesInput";
import { GetSlotTypesOutput } from "../types/GetSlotTypesOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetSlotTypesInput";
export * from "../types/GetSlotTypesOutput";
export * from "../types/GetSlotTypesExceptionsUnion";

export class GetSlotTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSlotTypesInput,
      OutputTypesUnion,
      GetSlotTypesOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSlotTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSlotTypesInput,
    GetSlotTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSlotTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSlotTypesInput, GetSlotTypesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSlotTypesInput, GetSlotTypesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
