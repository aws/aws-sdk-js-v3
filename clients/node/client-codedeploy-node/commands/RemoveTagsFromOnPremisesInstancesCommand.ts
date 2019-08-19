import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveTagsFromOnPremisesInstances } from "../model/operations/RemoveTagsFromOnPremisesInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveTagsFromOnPremisesInstancesInput } from "../types/RemoveTagsFromOnPremisesInstancesInput";
import { RemoveTagsFromOnPremisesInstancesOutput } from "../types/RemoveTagsFromOnPremisesInstancesOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/RemoveTagsFromOnPremisesInstancesInput";
export * from "../types/RemoveTagsFromOnPremisesInstancesOutput";
export * from "../types/RemoveTagsFromOnPremisesInstancesExceptionsUnion";

export class RemoveTagsFromOnPremisesInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveTagsFromOnPremisesInstancesInput,
      OutputTypesUnion,
      RemoveTagsFromOnPremisesInstancesOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveTagsFromOnPremisesInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveTagsFromOnPremisesInstancesInput,
    RemoveTagsFromOnPremisesInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveTagsFromOnPremisesInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveTagsFromOnPremisesInstancesInput,
    RemoveTagsFromOnPremisesInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveTagsFromOnPremisesInstancesInput,
        RemoveTagsFromOnPremisesInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
