import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateApp } from "../model/UpdateApp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAppInput } from "../types/UpdateAppInput";
import { UpdateAppOutput } from "../types/UpdateAppOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UpdateAppInput";
export * from "../types/UpdateAppOutput";
export * from "../types/UpdateAppExceptionsUnion";

export class UpdateAppCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAppInput,
      OutputTypesUnion,
      UpdateAppOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateApp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAppInput,
    UpdateAppOutput,
    Blob
  >();

  constructor(readonly input: UpdateAppInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAppInput, UpdateAppOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAppInput, UpdateAppOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
