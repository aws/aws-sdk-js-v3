import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutEventSelectors } from "../model/PutEventSelectors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEventSelectorsInput } from "../types/PutEventSelectorsInput";
import { PutEventSelectorsOutput } from "../types/PutEventSelectorsOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/PutEventSelectorsInput";
export * from "../types/PutEventSelectorsOutput";
export * from "../types/PutEventSelectorsExceptionsUnion";

export class PutEventSelectorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEventSelectorsInput,
      OutputTypesUnion,
      PutEventSelectorsOutput,
      CloudTrailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutEventSelectors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEventSelectorsInput,
    PutEventSelectorsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutEventSelectorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<PutEventSelectorsInput, PutEventSelectorsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutEventSelectorsInput, PutEventSelectorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
