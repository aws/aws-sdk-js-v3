import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyInstancePlacement } from "../model/operations/ModifyInstancePlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyInstancePlacementInput } from "../types/ModifyInstancePlacementInput";
import { ModifyInstancePlacementOutput } from "../types/ModifyInstancePlacementOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyInstancePlacementInput";
export * from "../types/ModifyInstancePlacementOutput";
export * from "../types/ModifyInstancePlacementExceptionsUnion";

export class ModifyInstancePlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyInstancePlacementInput,
      OutputTypesUnion,
      ModifyInstancePlacementOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyInstancePlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyInstancePlacementInput,
    ModifyInstancePlacementOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyInstancePlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyInstancePlacementInput,
    ModifyInstancePlacementOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyInstancePlacementInput, ModifyInstancePlacementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
