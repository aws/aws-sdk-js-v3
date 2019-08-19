import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateOptionGroup } from "../model/operations/CreateOptionGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateOptionGroupInput } from "../types/CreateOptionGroupInput";
import { CreateOptionGroupOutput } from "../types/CreateOptionGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateOptionGroupInput";
export * from "../types/CreateOptionGroupOutput";
export * from "../types/CreateOptionGroupExceptionsUnion";

export class CreateOptionGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateOptionGroupInput,
      OutputTypesUnion,
      CreateOptionGroupOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = CreateOptionGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateOptionGroupInput,
    CreateOptionGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateOptionGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateOptionGroupInput, CreateOptionGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateOptionGroupInput, CreateOptionGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
