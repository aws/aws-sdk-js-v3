import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportVolume } from "../model/operations/ImportVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportVolumeInput } from "../types/ImportVolumeInput";
import { ImportVolumeOutput } from "../types/ImportVolumeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ImportVolumeInput";
export * from "../types/ImportVolumeOutput";
export * from "../types/ImportVolumeExceptionsUnion";

export class ImportVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportVolumeInput,
      OutputTypesUnion,
      ImportVolumeOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ImportVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportVolumeInput,
    ImportVolumeOutput,
    Blob
  >();

  constructor(readonly input: ImportVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ImportVolumeInput, ImportVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportVolumeInput, ImportVolumeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
