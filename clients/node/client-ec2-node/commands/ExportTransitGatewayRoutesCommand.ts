import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ExportTransitGatewayRoutes } from "../model/ExportTransitGatewayRoutes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportTransitGatewayRoutesInput } from "../types/ExportTransitGatewayRoutesInput";
import { ExportTransitGatewayRoutesOutput } from "../types/ExportTransitGatewayRoutesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ExportTransitGatewayRoutesInput";
export * from "../types/ExportTransitGatewayRoutesOutput";
export * from "../types/ExportTransitGatewayRoutesExceptionsUnion";

export class ExportTransitGatewayRoutesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportTransitGatewayRoutesInput,
      OutputTypesUnion,
      ExportTransitGatewayRoutesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ExportTransitGatewayRoutes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportTransitGatewayRoutesInput,
    ExportTransitGatewayRoutesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ExportTransitGatewayRoutesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ExportTransitGatewayRoutesInput,
    ExportTransitGatewayRoutesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ExportTransitGatewayRoutesInput,
        ExportTransitGatewayRoutesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
