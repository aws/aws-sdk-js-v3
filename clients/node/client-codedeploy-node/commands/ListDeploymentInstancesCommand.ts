import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDeploymentInstances } from "../model/ListDeploymentInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeploymentInstancesInput } from "../types/ListDeploymentInstancesInput";
import { ListDeploymentInstancesOutput } from "../types/ListDeploymentInstancesOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/ListDeploymentInstancesInput";
export * from "../types/ListDeploymentInstancesOutput";
export * from "../types/ListDeploymentInstancesExceptionsUnion";

export class ListDeploymentInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeploymentInstancesInput,
      OutputTypesUnion,
      ListDeploymentInstancesOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDeploymentInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeploymentInstancesInput,
    ListDeploymentInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDeploymentInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeploymentInstancesInput,
    ListDeploymentInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeploymentInstancesInput, ListDeploymentInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
