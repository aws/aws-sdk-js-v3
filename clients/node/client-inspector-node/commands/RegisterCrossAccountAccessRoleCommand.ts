import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterCrossAccountAccessRole } from "../model/operations/RegisterCrossAccountAccessRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterCrossAccountAccessRoleInput } from "../types/RegisterCrossAccountAccessRoleInput";
import { RegisterCrossAccountAccessRoleOutput } from "../types/RegisterCrossAccountAccessRoleOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/RegisterCrossAccountAccessRoleInput";
export * from "../types/RegisterCrossAccountAccessRoleOutput";
export * from "../types/RegisterCrossAccountAccessRoleExceptionsUnion";

export class RegisterCrossAccountAccessRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterCrossAccountAccessRoleInput,
      OutputTypesUnion,
      RegisterCrossAccountAccessRoleOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterCrossAccountAccessRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterCrossAccountAccessRoleInput,
    RegisterCrossAccountAccessRoleOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterCrossAccountAccessRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterCrossAccountAccessRoleInput,
    RegisterCrossAccountAccessRoleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RegisterCrossAccountAccessRoleInput,
        RegisterCrossAccountAccessRoleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
