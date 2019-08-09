import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetResourceShareAssociations } from "../model/GetResourceShareAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourceShareAssociationsInput } from "../types/GetResourceShareAssociationsInput";
import { GetResourceShareAssociationsOutput } from "../types/GetResourceShareAssociationsOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/GetResourceShareAssociationsInput";
export * from "../types/GetResourceShareAssociationsOutput";
export * from "../types/GetResourceShareAssociationsExceptionsUnion";

export class GetResourceShareAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourceShareAssociationsInput,
      OutputTypesUnion,
      GetResourceShareAssociationsOutput,
      RAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetResourceShareAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourceShareAssociationsInput,
    GetResourceShareAssociationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetResourceShareAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResourceShareAssociationsInput,
    GetResourceShareAssociationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetResourceShareAssociationsInput,
        GetResourceShareAssociationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
