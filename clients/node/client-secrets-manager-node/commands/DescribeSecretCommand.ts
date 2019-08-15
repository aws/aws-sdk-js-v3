import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSecret } from "../model/operations/DescribeSecret";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSecretInput } from "../types/DescribeSecretInput";
import { DescribeSecretOutput } from "../types/DescribeSecretOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/DescribeSecretInput";
export * from "../types/DescribeSecretOutput";
export * from "../types/DescribeSecretExceptionsUnion";

export class DescribeSecretCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSecretInput,
      OutputTypesUnion,
      DescribeSecretOutput,
      SecretsManagerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSecret;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSecretInput,
    DescribeSecretOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSecretInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeSecretInput, DescribeSecretOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSecretInput, DescribeSecretOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
