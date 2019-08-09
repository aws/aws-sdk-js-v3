import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CopyBackupToRegion } from "../model/CopyBackupToRegion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyBackupToRegionInput } from "../types/CopyBackupToRegionInput";
import { CopyBackupToRegionOutput } from "../types/CopyBackupToRegionOutput";
import { CloudHSMV2ResolvedConfiguration } from "../CloudHSMV2Configuration";
export * from "../types/CopyBackupToRegionInput";
export * from "../types/CopyBackupToRegionOutput";
export * from "../types/CopyBackupToRegionExceptionsUnion";

export class CopyBackupToRegionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyBackupToRegionInput,
      OutputTypesUnion,
      CopyBackupToRegionOutput,
      CloudHSMV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CopyBackupToRegion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyBackupToRegionInput,
    CopyBackupToRegionOutput,
    Uint8Array
  >();

  constructor(readonly input: CopyBackupToRegionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudHSMV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CopyBackupToRegionInput,
    CopyBackupToRegionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopyBackupToRegionInput, CopyBackupToRegionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
