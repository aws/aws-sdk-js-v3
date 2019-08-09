import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRdsDbInstance } from "../model/UpdateRdsDbInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRdsDbInstanceInput } from "../types/UpdateRdsDbInstanceInput";
import { UpdateRdsDbInstanceOutput } from "../types/UpdateRdsDbInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UpdateRdsDbInstanceInput";
export * from "../types/UpdateRdsDbInstanceOutput";
export * from "../types/UpdateRdsDbInstanceExceptionsUnion";

export class UpdateRdsDbInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRdsDbInstanceInput,
      OutputTypesUnion,
      UpdateRdsDbInstanceOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateRdsDbInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRdsDbInstanceInput,
    UpdateRdsDbInstanceOutput,
    Blob
  >();

  constructor(readonly input: UpdateRdsDbInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRdsDbInstanceInput,
    UpdateRdsDbInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRdsDbInstanceInput, UpdateRdsDbInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
