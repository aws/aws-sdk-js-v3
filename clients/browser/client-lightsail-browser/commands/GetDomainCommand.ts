import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDomain } from "../model/GetDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDomainInput } from "../types/GetDomainInput";
import { GetDomainOutput } from "../types/GetDomainOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetDomainInput";
export * from "../types/GetDomainOutput";
export * from "../types/GetDomainExceptionsUnion";

export class GetDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDomainInput,
      OutputTypesUnion,
      GetDomainOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDomainInput,
    GetDomainOutput,
    Blob
  >();

  constructor(readonly input: GetDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDomainInput, GetDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDomainInput, GetDomainOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
