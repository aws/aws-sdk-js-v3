import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateDRTLogBucket } from "../model/DisassociateDRTLogBucket";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateDRTLogBucketInput } from "../types/DisassociateDRTLogBucketInput";
import { DisassociateDRTLogBucketOutput } from "../types/DisassociateDRTLogBucketOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/DisassociateDRTLogBucketInput";
export * from "../types/DisassociateDRTLogBucketOutput";
export * from "../types/DisassociateDRTLogBucketExceptionsUnion";

export class DisassociateDRTLogBucketCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateDRTLogBucketInput,
      OutputTypesUnion,
      DisassociateDRTLogBucketOutput,
      ShieldResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DisassociateDRTLogBucket;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateDRTLogBucketInput,
    DisassociateDRTLogBucketOutput,
    Uint8Array
  >();

  constructor(readonly input: DisassociateDRTLogBucketInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateDRTLogBucketInput,
    DisassociateDRTLogBucketOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateDRTLogBucketInput, DisassociateDRTLogBucketOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
