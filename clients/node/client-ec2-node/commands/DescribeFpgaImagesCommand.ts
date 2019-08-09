import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeFpgaImages } from "../model/DescribeFpgaImages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFpgaImagesInput } from "../types/DescribeFpgaImagesInput";
import { DescribeFpgaImagesOutput } from "../types/DescribeFpgaImagesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeFpgaImagesInput";
export * from "../types/DescribeFpgaImagesOutput";
export * from "../types/DescribeFpgaImagesExceptionsUnion";

export class DescribeFpgaImagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFpgaImagesInput,
      OutputTypesUnion,
      DescribeFpgaImagesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeFpgaImages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFpgaImagesInput,
    DescribeFpgaImagesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeFpgaImagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFpgaImagesInput,
    DescribeFpgaImagesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFpgaImagesInput, DescribeFpgaImagesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
