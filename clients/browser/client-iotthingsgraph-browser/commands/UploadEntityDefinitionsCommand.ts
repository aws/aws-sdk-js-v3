import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UploadEntityDefinitions } from "../model/operations/UploadEntityDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UploadEntityDefinitionsInput } from "../types/UploadEntityDefinitionsInput";
import { UploadEntityDefinitionsOutput } from "../types/UploadEntityDefinitionsOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/UploadEntityDefinitionsInput";
export * from "../types/UploadEntityDefinitionsOutput";
export * from "../types/UploadEntityDefinitionsExceptionsUnion";

export class UploadEntityDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UploadEntityDefinitionsInput,
      OutputTypesUnion,
      UploadEntityDefinitionsOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = UploadEntityDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UploadEntityDefinitionsInput,
    UploadEntityDefinitionsOutput,
    Blob
  >();

  constructor(readonly input: UploadEntityDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UploadEntityDefinitionsInput,
    UploadEntityDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UploadEntityDefinitionsInput, UploadEntityDefinitionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
