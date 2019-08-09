import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateInstance } from "../model/UpdateInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateInstanceInput } from "../types/UpdateInstanceInput";
import { UpdateInstanceOutput } from "../types/UpdateInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UpdateInstanceInput";
export * from "../types/UpdateInstanceOutput";
export * from "../types/UpdateInstanceExceptionsUnion";

export class UpdateInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateInstanceInput,
      OutputTypesUnion,
      UpdateInstanceOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateInstanceInput,
    UpdateInstanceOutput,
    Blob
  >();

  constructor(readonly input: UpdateInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateInstanceInput, UpdateInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateInstanceInput, UpdateInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
