import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResetDeployments } from "../model/operations/ResetDeployments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetDeploymentsInput } from "../types/ResetDeploymentsInput";
import { ResetDeploymentsOutput } from "../types/ResetDeploymentsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ResetDeploymentsInput";
export * from "../types/ResetDeploymentsOutput";
export * from "../types/ResetDeploymentsExceptionsUnion";

export class ResetDeploymentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetDeploymentsInput,
      OutputTypesUnion,
      ResetDeploymentsOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResetDeployments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetDeploymentsInput,
    ResetDeploymentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResetDeploymentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<ResetDeploymentsInput, ResetDeploymentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetDeploymentsInput, ResetDeploymentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
