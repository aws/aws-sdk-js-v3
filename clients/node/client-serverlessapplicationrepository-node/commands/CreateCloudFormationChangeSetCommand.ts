import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCloudFormationChangeSet } from "../model/operations/CreateCloudFormationChangeSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCloudFormationChangeSetInput } from "../types/CreateCloudFormationChangeSetInput";
import { CreateCloudFormationChangeSetOutput } from "../types/CreateCloudFormationChangeSetOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/CreateCloudFormationChangeSetInput";
export * from "../types/CreateCloudFormationChangeSetOutput";
export * from "../types/CreateCloudFormationChangeSetExceptionsUnion";

export class CreateCloudFormationChangeSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCloudFormationChangeSetInput,
      OutputTypesUnion,
      CreateCloudFormationChangeSetOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCloudFormationChangeSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCloudFormationChangeSetInput,
    CreateCloudFormationChangeSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCloudFormationChangeSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCloudFormationChangeSetInput,
    CreateCloudFormationChangeSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateCloudFormationChangeSetInput,
        CreateCloudFormationChangeSetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
