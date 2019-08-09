import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateConfig } from "../model/CreateConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConfigInput } from "../types/CreateConfigInput";
import { CreateConfigOutput } from "../types/CreateConfigOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/CreateConfigInput";
export * from "../types/CreateConfigOutput";
export * from "../types/CreateConfigExceptionsUnion";

export class CreateConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConfigInput,
      OutputTypesUnion,
      CreateConfigOutput,
      GroundStationResolvedConfiguration,
      Blob
    > {
  readonly model = CreateConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConfigInput,
    CreateConfigOutput,
    Blob
  >();

  constructor(readonly input: CreateConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateConfigInput, CreateConfigOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateConfigInput, CreateConfigOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
