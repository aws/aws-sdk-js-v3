import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateStack } from "../model/CreateStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStackInput } from "../types/CreateStackInput";
import { CreateStackOutput } from "../types/CreateStackOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/CreateStackInput";
export * from "../types/CreateStackOutput";
export * from "../types/CreateStackExceptionsUnion";

export class CreateStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStackInput,
      OutputTypesUnion,
      CreateStackOutput,
      CloudFormationResolvedConfiguration,
      Blob
    > {
  readonly model = CreateStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStackInput,
    CreateStackOutput,
    Blob
  >();

  constructor(readonly input: CreateStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateStackInput, CreateStackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateStackInput, CreateStackOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
