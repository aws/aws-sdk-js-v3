import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateApplication } from "../model/UpdateApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApplicationInput } from "../types/UpdateApplicationInput";
import { UpdateApplicationOutput } from "../types/UpdateApplicationOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/UpdateApplicationInput";
export * from "../types/UpdateApplicationOutput";
export * from "../types/UpdateApplicationExceptionsUnion";

export class UpdateApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApplicationInput,
      OutputTypesUnion,
      UpdateApplicationOutput,
      CodeDeployResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApplicationInput,
    UpdateApplicationOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateApplicationInput, UpdateApplicationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateApplicationInput, UpdateApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
