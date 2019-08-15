import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetContactReachabilityStatus } from "../model/operations/GetContactReachabilityStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetContactReachabilityStatusInput } from "../types/GetContactReachabilityStatusInput";
import { GetContactReachabilityStatusOutput } from "../types/GetContactReachabilityStatusOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/GetContactReachabilityStatusInput";
export * from "../types/GetContactReachabilityStatusOutput";
export * from "../types/GetContactReachabilityStatusExceptionsUnion";

export class GetContactReachabilityStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetContactReachabilityStatusInput,
      OutputTypesUnion,
      GetContactReachabilityStatusOutput,
      Route53DomainsResolvedConfiguration,
      Blob
    > {
  readonly model = GetContactReachabilityStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetContactReachabilityStatusInput,
    GetContactReachabilityStatusOutput,
    Blob
  >();

  constructor(readonly input: GetContactReachabilityStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetContactReachabilityStatusInput,
    GetContactReachabilityStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetContactReachabilityStatusInput,
        GetContactReachabilityStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
