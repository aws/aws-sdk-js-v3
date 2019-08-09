import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLaunchTemplateVersions } from "../model/DeleteLaunchTemplateVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLaunchTemplateVersionsInput } from "../types/DeleteLaunchTemplateVersionsInput";
import { DeleteLaunchTemplateVersionsOutput } from "../types/DeleteLaunchTemplateVersionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteLaunchTemplateVersionsInput";
export * from "../types/DeleteLaunchTemplateVersionsOutput";
export * from "../types/DeleteLaunchTemplateVersionsExceptionsUnion";

export class DeleteLaunchTemplateVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLaunchTemplateVersionsInput,
      OutputTypesUnion,
      DeleteLaunchTemplateVersionsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLaunchTemplateVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLaunchTemplateVersionsInput,
    DeleteLaunchTemplateVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLaunchTemplateVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLaunchTemplateVersionsInput,
    DeleteLaunchTemplateVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteLaunchTemplateVersionsInput,
        DeleteLaunchTemplateVersionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
