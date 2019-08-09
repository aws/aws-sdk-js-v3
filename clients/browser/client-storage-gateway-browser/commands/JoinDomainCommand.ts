import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { JoinDomain } from "../model/JoinDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { JoinDomainInput } from "../types/JoinDomainInput";
import { JoinDomainOutput } from "../types/JoinDomainOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/JoinDomainInput";
export * from "../types/JoinDomainOutput";
export * from "../types/JoinDomainExceptionsUnion";

export class JoinDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      JoinDomainInput,
      OutputTypesUnion,
      JoinDomainOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = JoinDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    JoinDomainInput,
    JoinDomainOutput,
    Blob
  >();

  constructor(readonly input: JoinDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<JoinDomainInput, JoinDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<JoinDomainInput, JoinDomainOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
