import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetService } from "../model/operations/GetService";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServiceInput } from "../types/GetServiceInput";
import { GetServiceOutput } from "../types/GetServiceOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/GetServiceInput";
export * from "../types/GetServiceOutput";
export * from "../types/GetServiceExceptionsUnion";

export class GetServiceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServiceInput,
      OutputTypesUnion,
      GetServiceOutput,
      ServiceDiscoveryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetService;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServiceInput,
    GetServiceOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetServiceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<GetServiceInput, GetServiceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetServiceInput, GetServiceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
