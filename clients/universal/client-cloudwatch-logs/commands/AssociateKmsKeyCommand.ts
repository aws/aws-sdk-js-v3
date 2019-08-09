import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateKmsKey } from "../model/AssociateKmsKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateKmsKeyInput } from "../types/AssociateKmsKeyInput";
import { AssociateKmsKeyOutput } from "../types/AssociateKmsKeyOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/AssociateKmsKeyInput";
export * from "../types/AssociateKmsKeyOutput";
export * from "../types/AssociateKmsKeyExceptionsUnion";

export class AssociateKmsKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateKmsKeyInput,
      OutputTypesUnion,
      AssociateKmsKeyOutput,
      CloudWatchLogsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateKmsKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateKmsKeyInput,
    AssociateKmsKeyOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateKmsKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<AssociateKmsKeyInput, AssociateKmsKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateKmsKeyInput, AssociateKmsKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
