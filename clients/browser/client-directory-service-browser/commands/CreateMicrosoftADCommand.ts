import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMicrosoftAD } from "../model/CreateMicrosoftAD";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMicrosoftADInput } from "../types/CreateMicrosoftADInput";
import { CreateMicrosoftADOutput } from "../types/CreateMicrosoftADOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/CreateMicrosoftADInput";
export * from "../types/CreateMicrosoftADOutput";
export * from "../types/CreateMicrosoftADExceptionsUnion";

export class CreateMicrosoftADCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMicrosoftADInput,
      OutputTypesUnion,
      CreateMicrosoftADOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = CreateMicrosoftAD;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMicrosoftADInput,
    CreateMicrosoftADOutput,
    Blob
  >();

  constructor(readonly input: CreateMicrosoftADInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateMicrosoftADInput, CreateMicrosoftADOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateMicrosoftADInput, CreateMicrosoftADOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
