import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTrafficMirrorSession } from "../model/operations/CreateTrafficMirrorSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTrafficMirrorSessionInput } from "../types/CreateTrafficMirrorSessionInput";
import { CreateTrafficMirrorSessionOutput } from "../types/CreateTrafficMirrorSessionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateTrafficMirrorSessionInput";
export * from "../types/CreateTrafficMirrorSessionOutput";
export * from "../types/CreateTrafficMirrorSessionExceptionsUnion";

export class CreateTrafficMirrorSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTrafficMirrorSessionInput,
      OutputTypesUnion,
      CreateTrafficMirrorSessionOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTrafficMirrorSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrafficMirrorSessionInput,
    CreateTrafficMirrorSessionOutput,
    Blob
  >();

  constructor(readonly input: CreateTrafficMirrorSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTrafficMirrorSessionInput,
    CreateTrafficMirrorSessionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateTrafficMirrorSessionInput,
        CreateTrafficMirrorSessionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
