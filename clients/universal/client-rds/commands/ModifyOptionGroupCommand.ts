import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyOptionGroup } from "../model/ModifyOptionGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyOptionGroupInput } from "../types/ModifyOptionGroupInput";
import { ModifyOptionGroupOutput } from "../types/ModifyOptionGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ModifyOptionGroupInput";
export * from "../types/ModifyOptionGroupOutput";
export * from "../types/ModifyOptionGroupExceptionsUnion";

export class ModifyOptionGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyOptionGroupInput,
      OutputTypesUnion,
      ModifyOptionGroupOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyOptionGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyOptionGroupInput,
    ModifyOptionGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyOptionGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyOptionGroupInput, ModifyOptionGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyOptionGroupInput, ModifyOptionGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
