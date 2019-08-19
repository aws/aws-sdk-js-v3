import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTrail } from "../model/operations/CreateTrail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTrailInput } from "../types/CreateTrailInput";
import { CreateTrailOutput } from "../types/CreateTrailOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/CreateTrailInput";
export * from "../types/CreateTrailOutput";
export * from "../types/CreateTrailExceptionsUnion";

export class CreateTrailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTrailInput,
      OutputTypesUnion,
      CreateTrailOutput,
      CloudTrailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTrail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrailInput,
    CreateTrailOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTrailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTrailInput, CreateTrailOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTrailInput, CreateTrailOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
