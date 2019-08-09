import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutRolePermissionsBoundary } from "../model/PutRolePermissionsBoundary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRolePermissionsBoundaryInput } from "../types/PutRolePermissionsBoundaryInput";
import { PutRolePermissionsBoundaryOutput } from "../types/PutRolePermissionsBoundaryOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/PutRolePermissionsBoundaryInput";
export * from "../types/PutRolePermissionsBoundaryOutput";
export * from "../types/PutRolePermissionsBoundaryExceptionsUnion";

export class PutRolePermissionsBoundaryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRolePermissionsBoundaryInput,
      OutputTypesUnion,
      PutRolePermissionsBoundaryOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutRolePermissionsBoundary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRolePermissionsBoundaryInput,
    PutRolePermissionsBoundaryOutput,
    Uint8Array
  >();

  constructor(readonly input: PutRolePermissionsBoundaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutRolePermissionsBoundaryInput,
    PutRolePermissionsBoundaryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutRolePermissionsBoundaryInput,
        PutRolePermissionsBoundaryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
