import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDisk } from "../model/CreateDisk";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDiskInput } from "../types/CreateDiskInput";
import { CreateDiskOutput } from "../types/CreateDiskOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateDiskInput";
export * from "../types/CreateDiskOutput";
export * from "../types/CreateDiskExceptionsUnion";

export class CreateDiskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDiskInput,
      OutputTypesUnion,
      CreateDiskOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDisk;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDiskInput,
    CreateDiskOutput,
    Blob
  >();

  constructor(readonly input: CreateDiskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDiskInput, CreateDiskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDiskInput, CreateDiskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
