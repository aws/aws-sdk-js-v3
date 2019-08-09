import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterOnPremisesInstance } from "../model/DeregisterOnPremisesInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterOnPremisesInstanceInput } from "../types/DeregisterOnPremisesInstanceInput";
import { DeregisterOnPremisesInstanceOutput } from "../types/DeregisterOnPremisesInstanceOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/DeregisterOnPremisesInstanceInput";
export * from "../types/DeregisterOnPremisesInstanceOutput";
export * from "../types/DeregisterOnPremisesInstanceExceptionsUnion";

export class DeregisterOnPremisesInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterOnPremisesInstanceInput,
      OutputTypesUnion,
      DeregisterOnPremisesInstanceOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = DeregisterOnPremisesInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterOnPremisesInstanceInput,
    DeregisterOnPremisesInstanceOutput,
    Blob
  >();

  constructor(readonly input: DeregisterOnPremisesInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterOnPremisesInstanceInput,
    DeregisterOnPremisesInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeregisterOnPremisesInstanceInput,
        DeregisterOnPremisesInstanceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
