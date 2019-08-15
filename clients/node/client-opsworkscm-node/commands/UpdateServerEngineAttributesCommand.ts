import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateServerEngineAttributes } from "../model/operations/UpdateServerEngineAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateServerEngineAttributesInput } from "../types/UpdateServerEngineAttributesInput";
import { UpdateServerEngineAttributesOutput } from "../types/UpdateServerEngineAttributesOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/UpdateServerEngineAttributesInput";
export * from "../types/UpdateServerEngineAttributesOutput";
export * from "../types/UpdateServerEngineAttributesExceptionsUnion";

export class UpdateServerEngineAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateServerEngineAttributesInput,
      OutputTypesUnion,
      UpdateServerEngineAttributesOutput,
      OpsWorksCMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateServerEngineAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateServerEngineAttributesInput,
    UpdateServerEngineAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateServerEngineAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateServerEngineAttributesInput,
    UpdateServerEngineAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateServerEngineAttributesInput,
        UpdateServerEngineAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
