import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListVolumeInitiators } from "../model/ListVolumeInitiators";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVolumeInitiatorsInput } from "../types/ListVolumeInitiatorsInput";
import { ListVolumeInitiatorsOutput } from "../types/ListVolumeInitiatorsOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/ListVolumeInitiatorsInput";
export * from "../types/ListVolumeInitiatorsOutput";
export * from "../types/ListVolumeInitiatorsExceptionsUnion";

export class ListVolumeInitiatorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVolumeInitiatorsInput,
      OutputTypesUnion,
      ListVolumeInitiatorsOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListVolumeInitiators;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVolumeInitiatorsInput,
    ListVolumeInitiatorsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListVolumeInitiatorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVolumeInitiatorsInput,
    ListVolumeInitiatorsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVolumeInitiatorsInput, ListVolumeInitiatorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
