import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CopyOptionGroup } from "../model/operations/CopyOptionGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyOptionGroupInput } from "../types/CopyOptionGroupInput";
import { CopyOptionGroupOutput } from "../types/CopyOptionGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CopyOptionGroupInput";
export * from "../types/CopyOptionGroupOutput";
export * from "../types/CopyOptionGroupExceptionsUnion";

export class CopyOptionGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyOptionGroupInput,
      OutputTypesUnion,
      CopyOptionGroupOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CopyOptionGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyOptionGroupInput,
    CopyOptionGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CopyOptionGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<CopyOptionGroupInput, CopyOptionGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopyOptionGroupInput, CopyOptionGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
