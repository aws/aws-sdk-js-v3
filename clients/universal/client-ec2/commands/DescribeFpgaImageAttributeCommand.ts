import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeFpgaImageAttribute } from "../model/DescribeFpgaImageAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFpgaImageAttributeInput } from "../types/DescribeFpgaImageAttributeInput";
import { DescribeFpgaImageAttributeOutput } from "../types/DescribeFpgaImageAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeFpgaImageAttributeInput";
export * from "../types/DescribeFpgaImageAttributeOutput";
export * from "../types/DescribeFpgaImageAttributeExceptionsUnion";

export class DescribeFpgaImageAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFpgaImageAttributeInput,
      OutputTypesUnion,
      DescribeFpgaImageAttributeOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeFpgaImageAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFpgaImageAttributeInput,
    DescribeFpgaImageAttributeOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeFpgaImageAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeFpgaImageAttributeInput,
    DescribeFpgaImageAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeFpgaImageAttributeInput,
        DescribeFpgaImageAttributeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
