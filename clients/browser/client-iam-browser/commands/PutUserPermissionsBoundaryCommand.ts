import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutUserPermissionsBoundary } from "../model/operations/PutUserPermissionsBoundary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutUserPermissionsBoundaryInput } from "../types/PutUserPermissionsBoundaryInput";
import { PutUserPermissionsBoundaryOutput } from "../types/PutUserPermissionsBoundaryOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/PutUserPermissionsBoundaryInput";
export * from "../types/PutUserPermissionsBoundaryOutput";
export * from "../types/PutUserPermissionsBoundaryExceptionsUnion";

export class PutUserPermissionsBoundaryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutUserPermissionsBoundaryInput,
      OutputTypesUnion,
      PutUserPermissionsBoundaryOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = PutUserPermissionsBoundary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutUserPermissionsBoundaryInput,
    PutUserPermissionsBoundaryOutput,
    Blob
  >();

  constructor(readonly input: PutUserPermissionsBoundaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutUserPermissionsBoundaryInput,
    PutUserPermissionsBoundaryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutUserPermissionsBoundaryInput,
        PutUserPermissionsBoundaryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
