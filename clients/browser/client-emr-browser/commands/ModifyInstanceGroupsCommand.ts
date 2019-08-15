import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyInstanceGroups } from "../model/operations/ModifyInstanceGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyInstanceGroupsInput } from "../types/ModifyInstanceGroupsInput";
import { ModifyInstanceGroupsOutput } from "../types/ModifyInstanceGroupsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/ModifyInstanceGroupsInput";
export * from "../types/ModifyInstanceGroupsOutput";
export * from "../types/ModifyInstanceGroupsExceptionsUnion";

export class ModifyInstanceGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyInstanceGroupsInput,
      OutputTypesUnion,
      ModifyInstanceGroupsOutput,
      EMRResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyInstanceGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyInstanceGroupsInput,
    ModifyInstanceGroupsOutput,
    Blob
  >();

  constructor(readonly input: ModifyInstanceGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyInstanceGroupsInput,
    ModifyInstanceGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyInstanceGroupsInput, ModifyInstanceGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
