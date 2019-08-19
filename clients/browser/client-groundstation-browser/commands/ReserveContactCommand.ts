import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReserveContact } from "../model/operations/ReserveContact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReserveContactInput } from "../types/ReserveContactInput";
import { ReserveContactOutput } from "../types/ReserveContactOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/ReserveContactInput";
export * from "../types/ReserveContactOutput";
export * from "../types/ReserveContactExceptionsUnion";

export class ReserveContactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReserveContactInput,
      OutputTypesUnion,
      ReserveContactOutput,
      GroundStationResolvedConfiguration,
      Blob
    > {
  readonly model = ReserveContact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReserveContactInput,
    ReserveContactOutput,
    Blob
  >();

  constructor(readonly input: ReserveContactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<ReserveContactInput, ReserveContactOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReserveContactInput, ReserveContactOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
