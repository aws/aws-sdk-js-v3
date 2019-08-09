import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateStack } from "../model/UpdateStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateStackInput } from "../types/UpdateStackInput";
import { UpdateStackOutput } from "../types/UpdateStackOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/UpdateStackInput";
export * from "../types/UpdateStackOutput";
export * from "../types/UpdateStackExceptionsUnion";

export class UpdateStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateStackInput,
      OutputTypesUnion,
      UpdateStackOutput,
      CloudFormationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateStackInput,
    UpdateStackOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateStackInput, UpdateStackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateStackInput, UpdateStackOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
