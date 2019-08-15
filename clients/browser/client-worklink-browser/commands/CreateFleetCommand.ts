import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFleet } from "../model/operations/CreateFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFleetInput } from "../types/CreateFleetInput";
import { CreateFleetOutput } from "../types/CreateFleetOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/CreateFleetInput";
export * from "../types/CreateFleetOutput";
export * from "../types/CreateFleetExceptionsUnion";

export class CreateFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFleetInput,
      OutputTypesUnion,
      CreateFleetOutput,
      WorkLinkResolvedConfiguration,
      Blob
    > {
  readonly model = CreateFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFleetInput,
    CreateFleetOutput,
    Blob
  >();

  constructor(readonly input: CreateFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateFleetInput, CreateFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFleetInput, CreateFleetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
