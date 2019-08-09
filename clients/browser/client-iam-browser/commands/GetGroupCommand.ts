import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGroup } from "../model/GetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGroupInput } from "../types/GetGroupInput";
import { GetGroupOutput } from "../types/GetGroupOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetGroupInput";
export * from "../types/GetGroupOutput";
export * from "../types/GetGroupExceptionsUnion";

export class GetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGroupInput,
      OutputTypesUnion,
      GetGroupOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGroupInput,
    GetGroupOutput,
    Blob
  >();

  constructor(readonly input: GetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGroupInput, GetGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGroupInput, GetGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
