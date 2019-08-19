import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutResourceAttributes } from "../model/operations/PutResourceAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutResourceAttributesInput } from "../types/PutResourceAttributesInput";
import { PutResourceAttributesOutput } from "../types/PutResourceAttributesOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/PutResourceAttributesInput";
export * from "../types/PutResourceAttributesOutput";
export * from "../types/PutResourceAttributesExceptionsUnion";

export class PutResourceAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutResourceAttributesInput,
      OutputTypesUnion,
      PutResourceAttributesOutput,
      MigrationHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutResourceAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutResourceAttributesInput,
    PutResourceAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutResourceAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutResourceAttributesInput,
    PutResourceAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutResourceAttributesInput, PutResourceAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
