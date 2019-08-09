import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDomains } from "../model/GetDomains";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDomainsInput } from "../types/GetDomainsInput";
import { GetDomainsOutput } from "../types/GetDomainsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetDomainsInput";
export * from "../types/GetDomainsOutput";
export * from "../types/GetDomainsExceptionsUnion";

export class GetDomainsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDomainsInput,
      OutputTypesUnion,
      GetDomainsOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetDomains;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDomainsInput,
    GetDomainsOutput,
    Blob
  >();

  constructor(readonly input: GetDomainsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDomainsInput, GetDomainsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDomainsInput, GetDomainsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
