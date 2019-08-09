import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetServiceLastAccessedDetails } from "../model/GetServiceLastAccessedDetails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServiceLastAccessedDetailsInput } from "../types/GetServiceLastAccessedDetailsInput";
import { GetServiceLastAccessedDetailsOutput } from "../types/GetServiceLastAccessedDetailsOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetServiceLastAccessedDetailsInput";
export * from "../types/GetServiceLastAccessedDetailsOutput";
export * from "../types/GetServiceLastAccessedDetailsExceptionsUnion";

export class GetServiceLastAccessedDetailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServiceLastAccessedDetailsInput,
      OutputTypesUnion,
      GetServiceLastAccessedDetailsOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetServiceLastAccessedDetails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServiceLastAccessedDetailsInput,
    GetServiceLastAccessedDetailsOutput,
    Blob
  >();

  constructor(readonly input: GetServiceLastAccessedDetailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetServiceLastAccessedDetailsInput,
    GetServiceLastAccessedDetailsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetServiceLastAccessedDetailsInput,
        GetServiceLastAccessedDetailsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
