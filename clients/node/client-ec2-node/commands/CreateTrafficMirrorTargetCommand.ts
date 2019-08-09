import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTrafficMirrorTarget } from "../model/CreateTrafficMirrorTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTrafficMirrorTargetInput } from "../types/CreateTrafficMirrorTargetInput";
import { CreateTrafficMirrorTargetOutput } from "../types/CreateTrafficMirrorTargetOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateTrafficMirrorTargetInput";
export * from "../types/CreateTrafficMirrorTargetOutput";
export * from "../types/CreateTrafficMirrorTargetExceptionsUnion";

export class CreateTrafficMirrorTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTrafficMirrorTargetInput,
      OutputTypesUnion,
      CreateTrafficMirrorTargetOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTrafficMirrorTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrafficMirrorTargetInput,
    CreateTrafficMirrorTargetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTrafficMirrorTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTrafficMirrorTargetInput,
    CreateTrafficMirrorTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTrafficMirrorTargetInput, CreateTrafficMirrorTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
