import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBlob } from "../model/GetBlob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBlobInput } from "../types/GetBlobInput";
import { GetBlobOutput } from "../types/GetBlobOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/GetBlobInput";
export * from "../types/GetBlobOutput";
export * from "../types/GetBlobExceptionsUnion";

export class GetBlobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBlobInput,
      OutputTypesUnion,
      GetBlobOutput,
      CodeCommitResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetBlob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBlobInput,
    GetBlobOutput,
    Uint8Array
  >();

  constructor(readonly input: GetBlobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBlobInput, GetBlobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBlobInput, GetBlobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
