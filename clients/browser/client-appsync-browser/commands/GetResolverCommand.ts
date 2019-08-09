import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResolver } from "../model/GetResolver";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResolverInput } from "../types/GetResolverInput";
import { GetResolverOutput } from "../types/GetResolverOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/GetResolverInput";
export * from "../types/GetResolverOutput";
export * from "../types/GetResolverExceptionsUnion";

export class GetResolverCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResolverInput,
      OutputTypesUnion,
      GetResolverOutput,
      AppSyncResolvedConfiguration,
      Blob
    > {
  readonly model = GetResolver;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResolverInput,
    GetResolverOutput,
    Blob
  >();

  constructor(readonly input: GetResolverInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<GetResolverInput, GetResolverOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResolverInput, GetResolverOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
