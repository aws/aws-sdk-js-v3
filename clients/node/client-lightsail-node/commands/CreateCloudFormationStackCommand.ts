import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCloudFormationStack } from "../model/operations/CreateCloudFormationStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCloudFormationStackInput } from "../types/CreateCloudFormationStackInput";
import { CreateCloudFormationStackOutput } from "../types/CreateCloudFormationStackOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateCloudFormationStackInput";
export * from "../types/CreateCloudFormationStackOutput";
export * from "../types/CreateCloudFormationStackExceptionsUnion";

export class CreateCloudFormationStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCloudFormationStackInput,
      OutputTypesUnion,
      CreateCloudFormationStackOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCloudFormationStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCloudFormationStackInput,
    CreateCloudFormationStackOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCloudFormationStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCloudFormationStackInput,
    CreateCloudFormationStackOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCloudFormationStackInput, CreateCloudFormationStackOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
