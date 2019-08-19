import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BundleInstance } from "../model/operations/BundleInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BundleInstanceInput } from "../types/BundleInstanceInput";
import { BundleInstanceOutput } from "../types/BundleInstanceOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/BundleInstanceInput";
export * from "../types/BundleInstanceOutput";
export * from "../types/BundleInstanceExceptionsUnion";

export class BundleInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BundleInstanceInput,
      OutputTypesUnion,
      BundleInstanceOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BundleInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BundleInstanceInput,
    BundleInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: BundleInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<BundleInstanceInput, BundleInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BundleInstanceInput, BundleInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
