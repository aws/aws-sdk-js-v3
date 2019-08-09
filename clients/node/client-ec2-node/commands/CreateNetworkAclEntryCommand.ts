import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateNetworkAclEntry } from "../model/CreateNetworkAclEntry";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNetworkAclEntryInput } from "../types/CreateNetworkAclEntryInput";
import { CreateNetworkAclEntryOutput } from "../types/CreateNetworkAclEntryOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateNetworkAclEntryInput";
export * from "../types/CreateNetworkAclEntryOutput";
export * from "../types/CreateNetworkAclEntryExceptionsUnion";

export class CreateNetworkAclEntryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNetworkAclEntryInput,
      OutputTypesUnion,
      CreateNetworkAclEntryOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateNetworkAclEntry;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNetworkAclEntryInput,
    CreateNetworkAclEntryOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateNetworkAclEntryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateNetworkAclEntryInput,
    CreateNetworkAclEntryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNetworkAclEntryInput, CreateNetworkAclEntryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
