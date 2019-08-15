import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterRdsDbInstance } from "../model/operations/DeregisterRdsDbInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterRdsDbInstanceInput } from "../types/DeregisterRdsDbInstanceInput";
import { DeregisterRdsDbInstanceOutput } from "../types/DeregisterRdsDbInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DeregisterRdsDbInstanceInput";
export * from "../types/DeregisterRdsDbInstanceOutput";
export * from "../types/DeregisterRdsDbInstanceExceptionsUnion";

export class DeregisterRdsDbInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterRdsDbInstanceInput,
      OutputTypesUnion,
      DeregisterRdsDbInstanceOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DeregisterRdsDbInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterRdsDbInstanceInput,
    DeregisterRdsDbInstanceOutput,
    Blob
  >();

  constructor(readonly input: DeregisterRdsDbInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterRdsDbInstanceInput,
    DeregisterRdsDbInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterRdsDbInstanceInput, DeregisterRdsDbInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
