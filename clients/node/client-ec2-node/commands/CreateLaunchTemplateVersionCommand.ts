import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLaunchTemplateVersion } from "../model/operations/CreateLaunchTemplateVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLaunchTemplateVersionInput } from "../types/CreateLaunchTemplateVersionInput";
import { CreateLaunchTemplateVersionOutput } from "../types/CreateLaunchTemplateVersionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateLaunchTemplateVersionInput";
export * from "../types/CreateLaunchTemplateVersionOutput";
export * from "../types/CreateLaunchTemplateVersionExceptionsUnion";

export class CreateLaunchTemplateVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLaunchTemplateVersionInput,
      OutputTypesUnion,
      CreateLaunchTemplateVersionOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLaunchTemplateVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLaunchTemplateVersionInput,
    CreateLaunchTemplateVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLaunchTemplateVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLaunchTemplateVersionInput,
    CreateLaunchTemplateVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateLaunchTemplateVersionInput,
        CreateLaunchTemplateVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
