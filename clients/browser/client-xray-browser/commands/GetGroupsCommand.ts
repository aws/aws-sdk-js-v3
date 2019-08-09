import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGroups } from "../model/GetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGroupsInput } from "../types/GetGroupsInput";
import { GetGroupsOutput } from "../types/GetGroupsOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/GetGroupsInput";
export * from "../types/GetGroupsOutput";
export * from "../types/GetGroupsExceptionsUnion";

export class GetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGroupsInput,
      OutputTypesUnion,
      GetGroupsOutput,
      XRayResolvedConfiguration,
      Blob
    > {
  readonly model = GetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGroupsInput,
    GetGroupsOutput,
    Blob
  >();

  constructor(readonly input: GetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGroupsInput, GetGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGroupsInput, GetGroupsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
