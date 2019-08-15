import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddInstanceGroups } from "../model/operations/AddInstanceGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddInstanceGroupsInput } from "../types/AddInstanceGroupsInput";
import { AddInstanceGroupsOutput } from "../types/AddInstanceGroupsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/AddInstanceGroupsInput";
export * from "../types/AddInstanceGroupsOutput";
export * from "../types/AddInstanceGroupsExceptionsUnion";

export class AddInstanceGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddInstanceGroupsInput,
      OutputTypesUnion,
      AddInstanceGroupsOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddInstanceGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddInstanceGroupsInput,
    AddInstanceGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddInstanceGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<AddInstanceGroupsInput, AddInstanceGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddInstanceGroupsInput, AddInstanceGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
