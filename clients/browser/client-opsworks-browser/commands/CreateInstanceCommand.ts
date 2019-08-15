import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateInstance } from "../model/operations/CreateInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInstanceInput } from "../types/CreateInstanceInput";
import { CreateInstanceOutput } from "../types/CreateInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/CreateInstanceInput";
export * from "../types/CreateInstanceOutput";
export * from "../types/CreateInstanceExceptionsUnion";

export class CreateInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInstanceInput,
      OutputTypesUnion,
      CreateInstanceOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = CreateInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInstanceInput,
    CreateInstanceOutput,
    Blob
  >();

  constructor(readonly input: CreateInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateInstanceInput, CreateInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInstanceInput, CreateInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
