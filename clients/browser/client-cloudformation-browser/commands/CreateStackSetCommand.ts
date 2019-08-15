import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateStackSet } from "../model/operations/CreateStackSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStackSetInput } from "../types/CreateStackSetInput";
import { CreateStackSetOutput } from "../types/CreateStackSetOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/CreateStackSetInput";
export * from "../types/CreateStackSetOutput";
export * from "../types/CreateStackSetExceptionsUnion";

export class CreateStackSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStackSetInput,
      OutputTypesUnion,
      CreateStackSetOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = CreateStackSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStackSetInput,
    CreateStackSetOutput,
    Blob
  >();

  constructor(readonly input: CreateStackSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateStackSetInput, CreateStackSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateStackSetInput, CreateStackSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
