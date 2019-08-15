import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCachediSCSIVolumes } from "../model/operations/DescribeCachediSCSIVolumes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCachediSCSIVolumesInput } from "../types/DescribeCachediSCSIVolumesInput";
import { DescribeCachediSCSIVolumesOutput } from "../types/DescribeCachediSCSIVolumesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeCachediSCSIVolumesInput";
export * from "../types/DescribeCachediSCSIVolumesOutput";
export * from "../types/DescribeCachediSCSIVolumesExceptionsUnion";

export class DescribeCachediSCSIVolumesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCachediSCSIVolumesInput,
      OutputTypesUnion,
      DescribeCachediSCSIVolumesOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeCachediSCSIVolumes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCachediSCSIVolumesInput,
    DescribeCachediSCSIVolumesOutput,
    Blob
  >();

  constructor(readonly input: DescribeCachediSCSIVolumesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCachediSCSIVolumesInput,
    DescribeCachediSCSIVolumesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeCachediSCSIVolumesInput,
        DescribeCachediSCSIVolumesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
