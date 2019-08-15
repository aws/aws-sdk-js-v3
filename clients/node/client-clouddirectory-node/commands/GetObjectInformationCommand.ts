import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetObjectInformation } from "../model/operations/GetObjectInformation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetObjectInformationInput } from "../types/GetObjectInformationInput";
import { GetObjectInformationOutput } from "../types/GetObjectInformationOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/GetObjectInformationInput";
export * from "../types/GetObjectInformationOutput";
export * from "../types/GetObjectInformationExceptionsUnion";

export class GetObjectInformationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetObjectInformationInput,
      OutputTypesUnion,
      GetObjectInformationOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetObjectInformation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetObjectInformationInput,
    GetObjectInformationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetObjectInformationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetObjectInformationInput,
    GetObjectInformationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetObjectInformationInput, GetObjectInformationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
