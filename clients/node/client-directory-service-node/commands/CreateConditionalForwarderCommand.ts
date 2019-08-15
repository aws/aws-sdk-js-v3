import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateConditionalForwarder } from "../model/operations/CreateConditionalForwarder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConditionalForwarderInput } from "../types/CreateConditionalForwarderInput";
import { CreateConditionalForwarderOutput } from "../types/CreateConditionalForwarderOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/CreateConditionalForwarderInput";
export * from "../types/CreateConditionalForwarderOutput";
export * from "../types/CreateConditionalForwarderExceptionsUnion";

export class CreateConditionalForwarderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConditionalForwarderInput,
      OutputTypesUnion,
      CreateConditionalForwarderOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateConditionalForwarder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConditionalForwarderInput,
    CreateConditionalForwarderOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateConditionalForwarderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateConditionalForwarderInput,
    CreateConditionalForwarderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateConditionalForwarderInput,
        CreateConditionalForwarderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
