import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RetrieveTapeArchive } from "../model/operations/RetrieveTapeArchive";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RetrieveTapeArchiveInput } from "../types/RetrieveTapeArchiveInput";
import { RetrieveTapeArchiveOutput } from "../types/RetrieveTapeArchiveOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/RetrieveTapeArchiveInput";
export * from "../types/RetrieveTapeArchiveOutput";
export * from "../types/RetrieveTapeArchiveExceptionsUnion";

export class RetrieveTapeArchiveCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RetrieveTapeArchiveInput,
      OutputTypesUnion,
      RetrieveTapeArchiveOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RetrieveTapeArchive;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RetrieveTapeArchiveInput,
    RetrieveTapeArchiveOutput,
    _stream.Readable
  >();

  constructor(readonly input: RetrieveTapeArchiveInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RetrieveTapeArchiveInput,
    RetrieveTapeArchiveOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RetrieveTapeArchiveInput, RetrieveTapeArchiveOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
