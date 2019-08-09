import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTrail } from "../model/CreateTrail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTrailInput } from "../types/CreateTrailInput";
import { CreateTrailOutput } from "../types/CreateTrailOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/CreateTrailInput";
export * from "../types/CreateTrailOutput";
export * from "../types/CreateTrailExceptionsUnion";

export class CreateTrailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTrailInput,
      OutputTypesUnion,
      CreateTrailOutput,
      CloudTrailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateTrail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrailInput,
    CreateTrailOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateTrailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTrailInput, CreateTrailOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTrailInput, CreateTrailOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
