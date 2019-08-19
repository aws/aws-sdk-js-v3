import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateNetworkAcl } from "../model/operations/CreateNetworkAcl";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNetworkAclInput } from "../types/CreateNetworkAclInput";
import { CreateNetworkAclOutput } from "../types/CreateNetworkAclOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateNetworkAclInput";
export * from "../types/CreateNetworkAclOutput";
export * from "../types/CreateNetworkAclExceptionsUnion";

export class CreateNetworkAclCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNetworkAclInput,
      OutputTypesUnion,
      CreateNetworkAclOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateNetworkAcl;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNetworkAclInput,
    CreateNetworkAclOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateNetworkAclInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateNetworkAclInput, CreateNetworkAclOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNetworkAclInput, CreateNetworkAclOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
