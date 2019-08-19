import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListVolumes } from "../model/operations/ListVolumes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVolumesInput } from "../types/ListVolumesInput";
import { ListVolumesOutput } from "../types/ListVolumesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/ListVolumesInput";
export * from "../types/ListVolumesOutput";
export * from "../types/ListVolumesExceptionsUnion";

export class ListVolumesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVolumesInput,
      OutputTypesUnion,
      ListVolumesOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = ListVolumes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVolumesInput,
    ListVolumesOutput,
    Blob
  >();

  constructor(readonly input: ListVolumesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<ListVolumesInput, ListVolumesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVolumesInput, ListVolumesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
