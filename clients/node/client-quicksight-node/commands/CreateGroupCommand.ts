import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateGroup } from "../model/CreateGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGroupInput } from "../types/CreateGroupInput";
import { CreateGroupOutput } from "../types/CreateGroupOutput";
import { QuickSightResolvedConfiguration } from "../QuickSightConfiguration";
export * from "../types/CreateGroupInput";
export * from "../types/CreateGroupOutput";
export * from "../types/CreateGroupExceptionsUnion";

export class CreateGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGroupInput,
      OutputTypesUnion,
      CreateGroupOutput,
      QuickSightResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGroupInput,
    CreateGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: QuickSightResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateGroupInput, CreateGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateGroupInput, CreateGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
