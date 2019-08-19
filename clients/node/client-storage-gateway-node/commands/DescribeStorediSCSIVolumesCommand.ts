import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeStorediSCSIVolumes } from "../model/operations/DescribeStorediSCSIVolumes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStorediSCSIVolumesInput } from "../types/DescribeStorediSCSIVolumesInput";
import { DescribeStorediSCSIVolumesOutput } from "../types/DescribeStorediSCSIVolumesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeStorediSCSIVolumesInput";
export * from "../types/DescribeStorediSCSIVolumesOutput";
export * from "../types/DescribeStorediSCSIVolumesExceptionsUnion";

export class DescribeStorediSCSIVolumesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStorediSCSIVolumesInput,
      OutputTypesUnion,
      DescribeStorediSCSIVolumesOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeStorediSCSIVolumes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStorediSCSIVolumesInput,
    DescribeStorediSCSIVolumesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeStorediSCSIVolumesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStorediSCSIVolumesInput,
    DescribeStorediSCSIVolumesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeStorediSCSIVolumesInput,
        DescribeStorediSCSIVolumesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
