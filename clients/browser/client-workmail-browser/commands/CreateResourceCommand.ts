import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateResource } from "../model/CreateResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResourceInput } from "../types/CreateResourceInput";
import { CreateResourceOutput } from "../types/CreateResourceOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/CreateResourceInput";
export * from "../types/CreateResourceOutput";
export * from "../types/CreateResourceExceptionsUnion";

export class CreateResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResourceInput,
      OutputTypesUnion,
      CreateResourceOutput,
      WorkMailResolvedConfiguration,
      Blob
    > {
  readonly model = CreateResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResourceInput,
    CreateResourceOutput,
    Blob
  >();

  constructor(readonly input: CreateResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateResourceInput, CreateResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateResourceInput, CreateResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
