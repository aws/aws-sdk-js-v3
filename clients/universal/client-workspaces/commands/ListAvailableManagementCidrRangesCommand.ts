import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAvailableManagementCidrRanges } from "../model/ListAvailableManagementCidrRanges";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAvailableManagementCidrRangesInput } from "../types/ListAvailableManagementCidrRangesInput";
import { ListAvailableManagementCidrRangesOutput } from "../types/ListAvailableManagementCidrRangesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/ListAvailableManagementCidrRangesInput";
export * from "../types/ListAvailableManagementCidrRangesOutput";
export * from "../types/ListAvailableManagementCidrRangesExceptionsUnion";

export class ListAvailableManagementCidrRangesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAvailableManagementCidrRangesInput,
      OutputTypesUnion,
      ListAvailableManagementCidrRangesOutput,
      WorkSpacesResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListAvailableManagementCidrRanges;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAvailableManagementCidrRangesInput,
    ListAvailableManagementCidrRangesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListAvailableManagementCidrRangesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAvailableManagementCidrRangesInput,
    ListAvailableManagementCidrRangesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAvailableManagementCidrRangesInput,
        ListAvailableManagementCidrRangesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
