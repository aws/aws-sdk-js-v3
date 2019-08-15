import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePlatformApplication } from "../model/operations/CreatePlatformApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePlatformApplicationInput } from "../types/CreatePlatformApplicationInput";
import { CreatePlatformApplicationOutput } from "../types/CreatePlatformApplicationOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/CreatePlatformApplicationInput";
export * from "../types/CreatePlatformApplicationOutput";
export * from "../types/CreatePlatformApplicationExceptionsUnion";

export class CreatePlatformApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePlatformApplicationInput,
      OutputTypesUnion,
      CreatePlatformApplicationOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePlatformApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePlatformApplicationInput,
    CreatePlatformApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePlatformApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePlatformApplicationInput,
    CreatePlatformApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePlatformApplicationInput, CreatePlatformApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
