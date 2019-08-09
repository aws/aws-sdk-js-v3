import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterApplicationRevision } from "../model/RegisterApplicationRevision";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterApplicationRevisionInput } from "../types/RegisterApplicationRevisionInput";
import { RegisterApplicationRevisionOutput } from "../types/RegisterApplicationRevisionOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/RegisterApplicationRevisionInput";
export * from "../types/RegisterApplicationRevisionOutput";
export * from "../types/RegisterApplicationRevisionExceptionsUnion";

export class RegisterApplicationRevisionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterApplicationRevisionInput,
      OutputTypesUnion,
      RegisterApplicationRevisionOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterApplicationRevision;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterApplicationRevisionInput,
    RegisterApplicationRevisionOutput,
    Blob
  >();

  constructor(readonly input: RegisterApplicationRevisionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterApplicationRevisionInput,
    RegisterApplicationRevisionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RegisterApplicationRevisionInput,
        RegisterApplicationRevisionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
