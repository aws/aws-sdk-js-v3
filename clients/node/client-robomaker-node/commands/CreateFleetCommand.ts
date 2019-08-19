import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateFleet } from "../model/operations/CreateFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFleetInput } from "../types/CreateFleetInput";
import { CreateFleetOutput } from "../types/CreateFleetOutput";
import { RoboMakerResolvedConfiguration } from "../RoboMakerConfiguration";
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
      RoboMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFleetInput,
    CreateFleetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RoboMakerResolvedConfiguration
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
