import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLaunchTemplate } from "../model/DeleteLaunchTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLaunchTemplateInput } from "../types/DeleteLaunchTemplateInput";
import { DeleteLaunchTemplateOutput } from "../types/DeleteLaunchTemplateOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteLaunchTemplateInput";
export * from "../types/DeleteLaunchTemplateOutput";
export * from "../types/DeleteLaunchTemplateExceptionsUnion";

export class DeleteLaunchTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLaunchTemplateInput,
      OutputTypesUnion,
      DeleteLaunchTemplateOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLaunchTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLaunchTemplateInput,
    DeleteLaunchTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLaunchTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLaunchTemplateInput,
    DeleteLaunchTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLaunchTemplateInput, DeleteLaunchTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
