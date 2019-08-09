import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetClusterCredentials } from "../model/GetClusterCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetClusterCredentialsInput } from "../types/GetClusterCredentialsInput";
import { GetClusterCredentialsOutput } from "../types/GetClusterCredentialsOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/GetClusterCredentialsInput";
export * from "../types/GetClusterCredentialsOutput";
export * from "../types/GetClusterCredentialsExceptionsUnion";

export class GetClusterCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetClusterCredentialsInput,
      OutputTypesUnion,
      GetClusterCredentialsOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetClusterCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetClusterCredentialsInput,
    GetClusterCredentialsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetClusterCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetClusterCredentialsInput,
    GetClusterCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetClusterCredentialsInput, GetClusterCredentialsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
