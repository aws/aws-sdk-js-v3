import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RotateIngestEndpointCredentials } from "../model/RotateIngestEndpointCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RotateIngestEndpointCredentialsInput } from "../types/RotateIngestEndpointCredentialsInput";
import { RotateIngestEndpointCredentialsOutput } from "../types/RotateIngestEndpointCredentialsOutput";
import { MediaPackageResolvedConfiguration } from "../MediaPackageConfiguration";
export * from "../types/RotateIngestEndpointCredentialsInput";
export * from "../types/RotateIngestEndpointCredentialsOutput";
export * from "../types/RotateIngestEndpointCredentialsExceptionsUnion";

export class RotateIngestEndpointCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RotateIngestEndpointCredentialsInput,
      OutputTypesUnion,
      RotateIngestEndpointCredentialsOutput,
      MediaPackageResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RotateIngestEndpointCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RotateIngestEndpointCredentialsInput,
    RotateIngestEndpointCredentialsOutput,
    _stream.Readable
  >();

  constructor(readonly input: RotateIngestEndpointCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaPackageResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RotateIngestEndpointCredentialsInput,
    RotateIngestEndpointCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RotateIngestEndpointCredentialsInput,
        RotateIngestEndpointCredentialsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
