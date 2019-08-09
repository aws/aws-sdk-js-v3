import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ContinueUpdateRollback } from "../model/ContinueUpdateRollback";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ContinueUpdateRollbackInput } from "../types/ContinueUpdateRollbackInput";
import { ContinueUpdateRollbackOutput } from "../types/ContinueUpdateRollbackOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ContinueUpdateRollbackInput";
export * from "../types/ContinueUpdateRollbackOutput";
export * from "../types/ContinueUpdateRollbackExceptionsUnion";

export class ContinueUpdateRollbackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ContinueUpdateRollbackInput,
      OutputTypesUnion,
      ContinueUpdateRollbackOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ContinueUpdateRollback;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ContinueUpdateRollbackInput,
    ContinueUpdateRollbackOutput,
    _stream.Readable
  >();

  constructor(readonly input: ContinueUpdateRollbackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ContinueUpdateRollbackInput,
    ContinueUpdateRollbackOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ContinueUpdateRollbackInput, ContinueUpdateRollbackOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
