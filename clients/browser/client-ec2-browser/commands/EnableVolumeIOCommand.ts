import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableVolumeIO } from "../model/EnableVolumeIO";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableVolumeIOInput } from "../types/EnableVolumeIOInput";
import { EnableVolumeIOOutput } from "../types/EnableVolumeIOOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/EnableVolumeIOInput";
export * from "../types/EnableVolumeIOOutput";
export * from "../types/EnableVolumeIOExceptionsUnion";

export class EnableVolumeIOCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableVolumeIOInput,
      OutputTypesUnion,
      EnableVolumeIOOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = EnableVolumeIO;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableVolumeIOInput,
    EnableVolumeIOOutput,
    Blob
  >();

  constructor(readonly input: EnableVolumeIOInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableVolumeIOInput, EnableVolumeIOOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableVolumeIOInput, EnableVolumeIOOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
