import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyFpgaImageAttribute } from "../model/ModifyFpgaImageAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyFpgaImageAttributeInput } from "../types/ModifyFpgaImageAttributeInput";
import { ModifyFpgaImageAttributeOutput } from "../types/ModifyFpgaImageAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyFpgaImageAttributeInput";
export * from "../types/ModifyFpgaImageAttributeOutput";
export * from "../types/ModifyFpgaImageAttributeExceptionsUnion";

export class ModifyFpgaImageAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyFpgaImageAttributeInput,
      OutputTypesUnion,
      ModifyFpgaImageAttributeOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyFpgaImageAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyFpgaImageAttributeInput,
    ModifyFpgaImageAttributeOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyFpgaImageAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyFpgaImageAttributeInput,
    ModifyFpgaImageAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyFpgaImageAttributeInput, ModifyFpgaImageAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
