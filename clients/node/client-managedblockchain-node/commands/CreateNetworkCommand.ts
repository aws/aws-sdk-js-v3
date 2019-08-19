import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateNetwork } from "../model/operations/CreateNetwork";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNetworkInput } from "../types/CreateNetworkInput";
import { CreateNetworkOutput } from "../types/CreateNetworkOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/CreateNetworkInput";
export * from "../types/CreateNetworkOutput";
export * from "../types/CreateNetworkExceptionsUnion";

export class CreateNetworkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNetworkInput,
      OutputTypesUnion,
      CreateNetworkOutput,
      ManagedBlockchainResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateNetwork;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNetworkInput,
    CreateNetworkOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateNetworkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateNetworkInput, CreateNetworkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNetworkInput, CreateNetworkOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
