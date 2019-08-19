import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateChangeSet } from "../model/operations/CreateChangeSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateChangeSetInput } from "../types/CreateChangeSetInput";
import { CreateChangeSetOutput } from "../types/CreateChangeSetOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/CreateChangeSetInput";
export * from "../types/CreateChangeSetOutput";
export * from "../types/CreateChangeSetExceptionsUnion";

export class CreateChangeSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateChangeSetInput,
      OutputTypesUnion,
      CreateChangeSetOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateChangeSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateChangeSetInput,
    CreateChangeSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateChangeSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateChangeSetInput, CreateChangeSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateChangeSetInput, CreateChangeSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
