import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetJobManifest } from "../model/GetJobManifest";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobManifestInput } from "../types/GetJobManifestInput";
import { GetJobManifestOutput } from "../types/GetJobManifestOutput";
import { SnowballResolvedConfiguration } from "../SnowballConfiguration";
export * from "../types/GetJobManifestInput";
export * from "../types/GetJobManifestOutput";
export * from "../types/GetJobManifestExceptionsUnion";

export class GetJobManifestCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobManifestInput,
      OutputTypesUnion,
      GetJobManifestOutput,
      SnowballResolvedConfiguration,
      Blob
    > {
  readonly model = GetJobManifest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobManifestInput,
    GetJobManifestOutput,
    Blob
  >();

  constructor(readonly input: GetJobManifestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SnowballResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobManifestInput, GetJobManifestOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobManifestInput, GetJobManifestOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
