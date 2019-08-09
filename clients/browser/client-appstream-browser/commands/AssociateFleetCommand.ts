import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateFleet } from "../model/AssociateFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateFleetInput } from "../types/AssociateFleetInput";
import { AssociateFleetOutput } from "../types/AssociateFleetOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/AssociateFleetInput";
export * from "../types/AssociateFleetOutput";
export * from "../types/AssociateFleetExceptionsUnion";

export class AssociateFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateFleetInput,
      OutputTypesUnion,
      AssociateFleetOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateFleetInput,
    AssociateFleetOutput,
    Blob
  >();

  constructor(readonly input: AssociateFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<AssociateFleetInput, AssociateFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateFleetInput, AssociateFleetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
