import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDeploymentTargets } from "../model/ListDeploymentTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeploymentTargetsInput } from "../types/ListDeploymentTargetsInput";
import { ListDeploymentTargetsOutput } from "../types/ListDeploymentTargetsOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/ListDeploymentTargetsInput";
export * from "../types/ListDeploymentTargetsOutput";
export * from "../types/ListDeploymentTargetsExceptionsUnion";

export class ListDeploymentTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeploymentTargetsInput,
      OutputTypesUnion,
      ListDeploymentTargetsOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDeploymentTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeploymentTargetsInput,
    ListDeploymentTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDeploymentTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeploymentTargetsInput,
    ListDeploymentTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeploymentTargetsInput, ListDeploymentTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
