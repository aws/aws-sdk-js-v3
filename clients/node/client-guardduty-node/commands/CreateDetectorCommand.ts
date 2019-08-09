import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDetector } from "../model/CreateDetector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDetectorInput } from "../types/CreateDetectorInput";
import { CreateDetectorOutput } from "../types/CreateDetectorOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/CreateDetectorInput";
export * from "../types/CreateDetectorOutput";
export * from "../types/CreateDetectorExceptionsUnion";

export class CreateDetectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDetectorInput,
      OutputTypesUnion,
      CreateDetectorOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDetector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDetectorInput,
    CreateDetectorOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDetectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDetectorInput, CreateDetectorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDetectorInput, CreateDetectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
