import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDefaultSubnet } from "../model/operations/CreateDefaultSubnet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDefaultSubnetInput } from "../types/CreateDefaultSubnetInput";
import { CreateDefaultSubnetOutput } from "../types/CreateDefaultSubnetOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateDefaultSubnetInput";
export * from "../types/CreateDefaultSubnetOutput";
export * from "../types/CreateDefaultSubnetExceptionsUnion";

export class CreateDefaultSubnetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDefaultSubnetInput,
      OutputTypesUnion,
      CreateDefaultSubnetOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDefaultSubnet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDefaultSubnetInput,
    CreateDefaultSubnetOutput,
    Blob
  >();

  constructor(readonly input: CreateDefaultSubnetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDefaultSubnetInput,
    CreateDefaultSubnetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDefaultSubnetInput, CreateDefaultSubnetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
