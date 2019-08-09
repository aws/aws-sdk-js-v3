import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListS3Resources } from "../model/ListS3Resources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListS3ResourcesInput } from "../types/ListS3ResourcesInput";
import { ListS3ResourcesOutput } from "../types/ListS3ResourcesOutput";
import { MacieResolvedConfiguration } from "../MacieConfiguration";
export * from "../types/ListS3ResourcesInput";
export * from "../types/ListS3ResourcesOutput";
export * from "../types/ListS3ResourcesExceptionsUnion";

export class ListS3ResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListS3ResourcesInput,
      OutputTypesUnion,
      ListS3ResourcesOutput,
      MacieResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListS3Resources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListS3ResourcesInput,
    ListS3ResourcesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListS3ResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MacieResolvedConfiguration
  ): __aws_sdk_types.Handler<ListS3ResourcesInput, ListS3ResourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListS3ResourcesInput, ListS3ResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
