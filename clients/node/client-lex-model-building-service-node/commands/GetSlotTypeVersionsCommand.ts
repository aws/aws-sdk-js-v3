import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSlotTypeVersions } from "../model/GetSlotTypeVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSlotTypeVersionsInput } from "../types/GetSlotTypeVersionsInput";
import { GetSlotTypeVersionsOutput } from "../types/GetSlotTypeVersionsOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetSlotTypeVersionsInput";
export * from "../types/GetSlotTypeVersionsOutput";
export * from "../types/GetSlotTypeVersionsExceptionsUnion";

export class GetSlotTypeVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSlotTypeVersionsInput,
      OutputTypesUnion,
      GetSlotTypeVersionsOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSlotTypeVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSlotTypeVersionsInput,
    GetSlotTypeVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSlotTypeVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSlotTypeVersionsInput,
    GetSlotTypeVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSlotTypeVersionsInput, GetSlotTypeVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
