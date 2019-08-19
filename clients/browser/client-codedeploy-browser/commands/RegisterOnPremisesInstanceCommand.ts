import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterOnPremisesInstance } from "../model/operations/RegisterOnPremisesInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterOnPremisesInstanceInput } from "../types/RegisterOnPremisesInstanceInput";
import { RegisterOnPremisesInstanceOutput } from "../types/RegisterOnPremisesInstanceOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/RegisterOnPremisesInstanceInput";
export * from "../types/RegisterOnPremisesInstanceOutput";
export * from "../types/RegisterOnPremisesInstanceExceptionsUnion";

export class RegisterOnPremisesInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterOnPremisesInstanceInput,
      OutputTypesUnion,
      RegisterOnPremisesInstanceOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterOnPremisesInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterOnPremisesInstanceInput,
    RegisterOnPremisesInstanceOutput,
    Blob
  >();

  constructor(readonly input: RegisterOnPremisesInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterOnPremisesInstanceInput,
    RegisterOnPremisesInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RegisterOnPremisesInstanceInput,
        RegisterOnPremisesInstanceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
