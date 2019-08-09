import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateDRTLogBucket } from "../model/AssociateDRTLogBucket";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateDRTLogBucketInput } from "../types/AssociateDRTLogBucketInput";
import { AssociateDRTLogBucketOutput } from "../types/AssociateDRTLogBucketOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/AssociateDRTLogBucketInput";
export * from "../types/AssociateDRTLogBucketOutput";
export * from "../types/AssociateDRTLogBucketExceptionsUnion";

export class AssociateDRTLogBucketCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateDRTLogBucketInput,
      OutputTypesUnion,
      AssociateDRTLogBucketOutput,
      ShieldResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateDRTLogBucket;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateDRTLogBucketInput,
    AssociateDRTLogBucketOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateDRTLogBucketInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateDRTLogBucketInput,
    AssociateDRTLogBucketOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateDRTLogBucketInput, AssociateDRTLogBucketOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
