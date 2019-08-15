import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePlacement } from "../model/operations/CreatePlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePlacementInput } from "../types/CreatePlacementInput";
import { CreatePlacementOutput } from "../types/CreatePlacementOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/CreatePlacementInput";
export * from "../types/CreatePlacementOutput";
export * from "../types/CreatePlacementExceptionsUnion";

export class CreatePlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePlacementInput,
      OutputTypesUnion,
      CreatePlacementOutput,
      IoT1ClickProjectsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePlacementInput,
    CreatePlacementOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreatePlacementInput, CreatePlacementOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePlacementInput, CreatePlacementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
