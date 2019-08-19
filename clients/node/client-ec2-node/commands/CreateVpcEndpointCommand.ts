import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateVpcEndpoint } from "../model/operations/CreateVpcEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVpcEndpointInput } from "../types/CreateVpcEndpointInput";
import { CreateVpcEndpointOutput } from "../types/CreateVpcEndpointOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateVpcEndpointInput";
export * from "../types/CreateVpcEndpointOutput";
export * from "../types/CreateVpcEndpointExceptionsUnion";

export class CreateVpcEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVpcEndpointInput,
      OutputTypesUnion,
      CreateVpcEndpointOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateVpcEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpcEndpointInput,
    CreateVpcEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateVpcEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateVpcEndpointInput, CreateVpcEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVpcEndpointInput, CreateVpcEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
