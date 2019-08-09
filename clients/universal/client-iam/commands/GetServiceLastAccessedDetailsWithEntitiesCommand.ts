import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetServiceLastAccessedDetailsWithEntities } from "../model/GetServiceLastAccessedDetailsWithEntities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServiceLastAccessedDetailsWithEntitiesInput } from "../types/GetServiceLastAccessedDetailsWithEntitiesInput";
import { GetServiceLastAccessedDetailsWithEntitiesOutput } from "../types/GetServiceLastAccessedDetailsWithEntitiesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetServiceLastAccessedDetailsWithEntitiesInput";
export * from "../types/GetServiceLastAccessedDetailsWithEntitiesOutput";
export * from "../types/GetServiceLastAccessedDetailsWithEntitiesExceptionsUnion";

export class GetServiceLastAccessedDetailsWithEntitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServiceLastAccessedDetailsWithEntitiesInput,
      OutputTypesUnion,
      GetServiceLastAccessedDetailsWithEntitiesOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetServiceLastAccessedDetailsWithEntities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServiceLastAccessedDetailsWithEntitiesInput,
    GetServiceLastAccessedDetailsWithEntitiesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetServiceLastAccessedDetailsWithEntitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetServiceLastAccessedDetailsWithEntitiesInput,
    GetServiceLastAccessedDetailsWithEntitiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetServiceLastAccessedDetailsWithEntitiesInput,
        GetServiceLastAccessedDetailsWithEntitiesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
