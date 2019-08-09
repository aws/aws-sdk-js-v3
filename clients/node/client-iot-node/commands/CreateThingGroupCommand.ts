import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateThingGroup } from "../model/CreateThingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateThingGroupInput } from "../types/CreateThingGroupInput";
import { CreateThingGroupOutput } from "../types/CreateThingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateThingGroupInput";
export * from "../types/CreateThingGroupOutput";
export * from "../types/CreateThingGroupExceptionsUnion";

export class CreateThingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateThingGroupInput,
      OutputTypesUnion,
      CreateThingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateThingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateThingGroupInput,
    CreateThingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateThingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateThingGroupInput, CreateThingGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateThingGroupInput, CreateThingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
