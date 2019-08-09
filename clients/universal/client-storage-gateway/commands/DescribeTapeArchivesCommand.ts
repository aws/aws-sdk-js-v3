import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTapeArchives } from "../model/DescribeTapeArchives";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTapeArchivesInput } from "../types/DescribeTapeArchivesInput";
import { DescribeTapeArchivesOutput } from "../types/DescribeTapeArchivesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeTapeArchivesInput";
export * from "../types/DescribeTapeArchivesOutput";
export * from "../types/DescribeTapeArchivesExceptionsUnion";

export class DescribeTapeArchivesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTapeArchivesInput,
      OutputTypesUnion,
      DescribeTapeArchivesOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeTapeArchives;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTapeArchivesInput,
    DescribeTapeArchivesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeTapeArchivesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTapeArchivesInput,
    DescribeTapeArchivesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTapeArchivesInput, DescribeTapeArchivesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
