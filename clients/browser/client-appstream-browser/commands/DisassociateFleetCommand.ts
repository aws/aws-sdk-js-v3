import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateFleet } from "../model/operations/DisassociateFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateFleetInput } from "../types/DisassociateFleetInput";
import { DisassociateFleetOutput } from "../types/DisassociateFleetOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DisassociateFleetInput";
export * from "../types/DisassociateFleetOutput";
export * from "../types/DisassociateFleetExceptionsUnion";

export class DisassociateFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateFleetInput,
      OutputTypesUnion,
      DisassociateFleetOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateFleetInput,
    DisassociateFleetOutput,
    Blob
  >();

  constructor(readonly input: DisassociateFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<DisassociateFleetInput, DisassociateFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateFleetInput, DisassociateFleetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
