import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReleaseHosts } from "../model/operations/ReleaseHosts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReleaseHostsInput } from "../types/ReleaseHostsInput";
import { ReleaseHostsOutput } from "../types/ReleaseHostsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ReleaseHostsInput";
export * from "../types/ReleaseHostsOutput";
export * from "../types/ReleaseHostsExceptionsUnion";

export class ReleaseHostsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReleaseHostsInput,
      OutputTypesUnion,
      ReleaseHostsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ReleaseHosts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReleaseHostsInput,
    ReleaseHostsOutput,
    Blob
  >();

  constructor(readonly input: ReleaseHostsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ReleaseHostsInput, ReleaseHostsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReleaseHostsInput, ReleaseHostsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
