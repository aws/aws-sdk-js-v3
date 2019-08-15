import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestoreDomainAccess } from "../model/operations/RestoreDomainAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreDomainAccessInput } from "../types/RestoreDomainAccessInput";
import { RestoreDomainAccessOutput } from "../types/RestoreDomainAccessOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/RestoreDomainAccessInput";
export * from "../types/RestoreDomainAccessOutput";
export * from "../types/RestoreDomainAccessExceptionsUnion";

export class RestoreDomainAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreDomainAccessInput,
      OutputTypesUnion,
      RestoreDomainAccessOutput,
      WorkLinkResolvedConfiguration,
      Blob
    > {
  readonly model = RestoreDomainAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreDomainAccessInput,
    RestoreDomainAccessOutput,
    Blob
  >();

  constructor(readonly input: RestoreDomainAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreDomainAccessInput,
    RestoreDomainAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestoreDomainAccessInput, RestoreDomainAccessOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
