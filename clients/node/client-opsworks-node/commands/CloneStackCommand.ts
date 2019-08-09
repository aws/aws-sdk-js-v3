import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CloneStack } from "../model/CloneStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CloneStackInput } from "../types/CloneStackInput";
import { CloneStackOutput } from "../types/CloneStackOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/CloneStackInput";
export * from "../types/CloneStackOutput";
export * from "../types/CloneStackExceptionsUnion";

export class CloneStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CloneStackInput,
      OutputTypesUnion,
      CloneStackOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CloneStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CloneStackInput,
    CloneStackOutput,
    _stream.Readable
  >();

  constructor(readonly input: CloneStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<CloneStackInput, CloneStackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CloneStackInput, CloneStackOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
