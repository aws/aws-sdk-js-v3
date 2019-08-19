import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutAttributes } from "../model/operations/PutAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAttributesInput } from "../types/PutAttributesInput";
import { PutAttributesOutput } from "../types/PutAttributesOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/PutAttributesInput";
export * from "../types/PutAttributesOutput";
export * from "../types/PutAttributesExceptionsUnion";

export class PutAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAttributesInput,
      OutputTypesUnion,
      PutAttributesOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAttributesInput,
    PutAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<PutAttributesInput, PutAttributesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutAttributesInput, PutAttributesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
