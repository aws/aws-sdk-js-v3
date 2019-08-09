import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartInstances } from "../model/StartInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartInstancesInput } from "../types/StartInstancesInput";
import { StartInstancesOutput } from "../types/StartInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/StartInstancesInput";
export * from "../types/StartInstancesOutput";
export * from "../types/StartInstancesExceptionsUnion";

export class StartInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartInstancesInput,
      OutputTypesUnion,
      StartInstancesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartInstancesInput,
    StartInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<StartInstancesInput, StartInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartInstancesInput, StartInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
