import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddTagsToOnPremisesInstances } from "../model/operations/AddTagsToOnPremisesInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddTagsToOnPremisesInstancesInput } from "../types/AddTagsToOnPremisesInstancesInput";
import { AddTagsToOnPremisesInstancesOutput } from "../types/AddTagsToOnPremisesInstancesOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/AddTagsToOnPremisesInstancesInput";
export * from "../types/AddTagsToOnPremisesInstancesOutput";
export * from "../types/AddTagsToOnPremisesInstancesExceptionsUnion";

export class AddTagsToOnPremisesInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddTagsToOnPremisesInstancesInput,
      OutputTypesUnion,
      AddTagsToOnPremisesInstancesOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = AddTagsToOnPremisesInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddTagsToOnPremisesInstancesInput,
    AddTagsToOnPremisesInstancesOutput,
    Blob
  >();

  constructor(readonly input: AddTagsToOnPremisesInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddTagsToOnPremisesInstancesInput,
    AddTagsToOnPremisesInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AddTagsToOnPremisesInstancesInput,
        AddTagsToOnPremisesInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
