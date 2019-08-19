import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDimensionKeys } from "../model/operations/DescribeDimensionKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDimensionKeysInput } from "../types/DescribeDimensionKeysInput";
import { DescribeDimensionKeysOutput } from "../types/DescribeDimensionKeysOutput";
import { PIResolvedConfiguration } from "../PIConfiguration";
export * from "../types/DescribeDimensionKeysInput";
export * from "../types/DescribeDimensionKeysOutput";
export * from "../types/DescribeDimensionKeysExceptionsUnion";

export class DescribeDimensionKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDimensionKeysInput,
      OutputTypesUnion,
      DescribeDimensionKeysOutput,
      PIResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDimensionKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDimensionKeysInput,
    DescribeDimensionKeysOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDimensionKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PIResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDimensionKeysInput,
    DescribeDimensionKeysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDimensionKeysInput, DescribeDimensionKeysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
