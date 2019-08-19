import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVpc } from "../model/operations/CreateVpc";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVpcInput } from "../types/CreateVpcInput";
import { CreateVpcOutput } from "../types/CreateVpcOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateVpcInput";
export * from "../types/CreateVpcOutput";
export * from "../types/CreateVpcExceptionsUnion";

export class CreateVpcCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVpcInput,
      OutputTypesUnion,
      CreateVpcOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateVpc;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpcInput,
    CreateVpcOutput,
    Blob
  >();

  constructor(readonly input: CreateVpcInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateVpcInput, CreateVpcOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVpcInput, CreateVpcOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
