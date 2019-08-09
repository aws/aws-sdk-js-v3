import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteWorkteam } from "../model/DeleteWorkteam";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteWorkteamInput } from "../types/DeleteWorkteamInput";
import { DeleteWorkteamOutput } from "../types/DeleteWorkteamOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DeleteWorkteamInput";
export * from "../types/DeleteWorkteamOutput";
export * from "../types/DeleteWorkteamExceptionsUnion";

export class DeleteWorkteamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteWorkteamInput,
      OutputTypesUnion,
      DeleteWorkteamOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteWorkteam;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteWorkteamInput,
    DeleteWorkteamOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteWorkteamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteWorkteamInput, DeleteWorkteamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteWorkteamInput, DeleteWorkteamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
