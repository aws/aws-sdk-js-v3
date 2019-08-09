import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTapes } from "../model/DescribeTapes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTapesInput } from "../types/DescribeTapesInput";
import { DescribeTapesOutput } from "../types/DescribeTapesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeTapesInput";
export * from "../types/DescribeTapesOutput";
export * from "../types/DescribeTapesExceptionsUnion";

export class DescribeTapesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTapesInput,
      OutputTypesUnion,
      DescribeTapesOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTapes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTapesInput,
    DescribeTapesOutput,
    Blob
  >();

  constructor(readonly input: DescribeTapesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeTapesInput, DescribeTapesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTapesInput, DescribeTapesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
