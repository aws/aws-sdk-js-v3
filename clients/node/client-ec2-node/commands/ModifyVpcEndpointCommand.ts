import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyVpcEndpoint } from "../model/ModifyVpcEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyVpcEndpointInput } from "../types/ModifyVpcEndpointInput";
import { ModifyVpcEndpointOutput } from "../types/ModifyVpcEndpointOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyVpcEndpointInput";
export * from "../types/ModifyVpcEndpointOutput";
export * from "../types/ModifyVpcEndpointExceptionsUnion";

export class ModifyVpcEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyVpcEndpointInput,
      OutputTypesUnion,
      ModifyVpcEndpointOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyVpcEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVpcEndpointInput,
    ModifyVpcEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyVpcEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyVpcEndpointInput, ModifyVpcEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyVpcEndpointInput, ModifyVpcEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
