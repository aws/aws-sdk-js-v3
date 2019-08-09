import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSolutionVersion } from "../model/CreateSolutionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSolutionVersionInput } from "../types/CreateSolutionVersionInput";
import { CreateSolutionVersionOutput } from "../types/CreateSolutionVersionOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/CreateSolutionVersionInput";
export * from "../types/CreateSolutionVersionOutput";
export * from "../types/CreateSolutionVersionExceptionsUnion";

export class CreateSolutionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSolutionVersionInput,
      OutputTypesUnion,
      CreateSolutionVersionOutput,
      PersonalizeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateSolutionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSolutionVersionInput,
    CreateSolutionVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateSolutionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSolutionVersionInput,
    CreateSolutionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSolutionVersionInput, CreateSolutionVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
