import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetHostReservationPurchasePreview } from "../model/GetHostReservationPurchasePreview";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHostReservationPurchasePreviewInput } from "../types/GetHostReservationPurchasePreviewInput";
import { GetHostReservationPurchasePreviewOutput } from "../types/GetHostReservationPurchasePreviewOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetHostReservationPurchasePreviewInput";
export * from "../types/GetHostReservationPurchasePreviewOutput";
export * from "../types/GetHostReservationPurchasePreviewExceptionsUnion";

export class GetHostReservationPurchasePreviewCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHostReservationPurchasePreviewInput,
      OutputTypesUnion,
      GetHostReservationPurchasePreviewOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetHostReservationPurchasePreview;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHostReservationPurchasePreviewInput,
    GetHostReservationPurchasePreviewOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetHostReservationPurchasePreviewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetHostReservationPurchasePreviewInput,
    GetHostReservationPurchasePreviewOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetHostReservationPurchasePreviewInput,
        GetHostReservationPurchasePreviewOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
