import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateResourceGroup } from "../model/operations/CreateResourceGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResourceGroupInput } from "../types/CreateResourceGroupInput";
import { CreateResourceGroupOutput } from "../types/CreateResourceGroupOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/CreateResourceGroupInput";
export * from "../types/CreateResourceGroupOutput";
export * from "../types/CreateResourceGroupExceptionsUnion";

export class CreateResourceGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResourceGroupInput,
      OutputTypesUnion,
      CreateResourceGroupOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateResourceGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResourceGroupInput,
    CreateResourceGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateResourceGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateResourceGroupInput,
    CreateResourceGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateResourceGroupInput, CreateResourceGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
