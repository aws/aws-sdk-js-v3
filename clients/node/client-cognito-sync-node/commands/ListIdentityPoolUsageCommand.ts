import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListIdentityPoolUsage } from "../model/operations/ListIdentityPoolUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListIdentityPoolUsageInput } from "../types/ListIdentityPoolUsageInput";
import { ListIdentityPoolUsageOutput } from "../types/ListIdentityPoolUsageOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/ListIdentityPoolUsageInput";
export * from "../types/ListIdentityPoolUsageOutput";
export * from "../types/ListIdentityPoolUsageExceptionsUnion";

export class ListIdentityPoolUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListIdentityPoolUsageInput,
      OutputTypesUnion,
      ListIdentityPoolUsageOutput,
      CognitoSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListIdentityPoolUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListIdentityPoolUsageInput,
    ListIdentityPoolUsageOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListIdentityPoolUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListIdentityPoolUsageInput,
    ListIdentityPoolUsageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListIdentityPoolUsageInput, ListIdentityPoolUsageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
