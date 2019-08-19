import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateWorkGroup } from "../model/operations/CreateWorkGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateWorkGroupInput } from "../types/CreateWorkGroupInput";
import { CreateWorkGroupOutput } from "../types/CreateWorkGroupOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/CreateWorkGroupInput";
export * from "../types/CreateWorkGroupOutput";
export * from "../types/CreateWorkGroupExceptionsUnion";

export class CreateWorkGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateWorkGroupInput,
      OutputTypesUnion,
      CreateWorkGroupOutput,
      AthenaResolvedConfiguration,
      Blob
    > {
  readonly model = CreateWorkGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateWorkGroupInput,
    CreateWorkGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateWorkGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateWorkGroupInput, CreateWorkGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateWorkGroupInput, CreateWorkGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
