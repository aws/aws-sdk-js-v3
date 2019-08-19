import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelContact } from "../model/operations/CancelContact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelContactInput } from "../types/CancelContactInput";
import { CancelContactOutput } from "../types/CancelContactOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/CancelContactInput";
export * from "../types/CancelContactOutput";
export * from "../types/CancelContactExceptionsUnion";

export class CancelContactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelContactInput,
      OutputTypesUnion,
      CancelContactOutput,
      GroundStationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelContact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelContactInput,
    CancelContactOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelContactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelContactInput, CancelContactOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelContactInput, CancelContactOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
