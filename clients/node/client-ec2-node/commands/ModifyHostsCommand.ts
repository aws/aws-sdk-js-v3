import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyHosts } from "../model/operations/ModifyHosts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyHostsInput } from "../types/ModifyHostsInput";
import { ModifyHostsOutput } from "../types/ModifyHostsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyHostsInput";
export * from "../types/ModifyHostsOutput";
export * from "../types/ModifyHostsExceptionsUnion";

export class ModifyHostsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyHostsInput,
      OutputTypesUnion,
      ModifyHostsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyHosts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyHostsInput,
    ModifyHostsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyHostsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyHostsInput, ModifyHostsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyHostsInput, ModifyHostsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
