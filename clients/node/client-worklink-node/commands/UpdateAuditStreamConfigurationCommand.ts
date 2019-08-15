import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAuditStreamConfiguration } from "../model/operations/UpdateAuditStreamConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAuditStreamConfigurationInput } from "../types/UpdateAuditStreamConfigurationInput";
import { UpdateAuditStreamConfigurationOutput } from "../types/UpdateAuditStreamConfigurationOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/UpdateAuditStreamConfigurationInput";
export * from "../types/UpdateAuditStreamConfigurationOutput";
export * from "../types/UpdateAuditStreamConfigurationExceptionsUnion";

export class UpdateAuditStreamConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAuditStreamConfigurationInput,
      OutputTypesUnion,
      UpdateAuditStreamConfigurationOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAuditStreamConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAuditStreamConfigurationInput,
    UpdateAuditStreamConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAuditStreamConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAuditStreamConfigurationInput,
    UpdateAuditStreamConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateAuditStreamConfigurationInput,
        UpdateAuditStreamConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
