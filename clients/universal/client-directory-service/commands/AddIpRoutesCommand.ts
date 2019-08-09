import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddIpRoutes } from "../model/AddIpRoutes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddIpRoutesInput } from "../types/AddIpRoutesInput";
import { AddIpRoutesOutput } from "../types/AddIpRoutesOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/AddIpRoutesInput";
export * from "../types/AddIpRoutesOutput";
export * from "../types/AddIpRoutesExceptionsUnion";

export class AddIpRoutesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddIpRoutesInput,
      OutputTypesUnion,
      AddIpRoutesOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AddIpRoutes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddIpRoutesInput,
    AddIpRoutesOutput,
    Uint8Array
  >();

  constructor(readonly input: AddIpRoutesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<AddIpRoutesInput, AddIpRoutesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddIpRoutesInput, AddIpRoutesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
