import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateTerminationProtection } from "../model/UpdateTerminationProtection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTerminationProtectionInput } from "../types/UpdateTerminationProtectionInput";
import { UpdateTerminationProtectionOutput } from "../types/UpdateTerminationProtectionOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/UpdateTerminationProtectionInput";
export * from "../types/UpdateTerminationProtectionOutput";
export * from "../types/UpdateTerminationProtectionExceptionsUnion";

export class UpdateTerminationProtectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTerminationProtectionInput,
      OutputTypesUnion,
      UpdateTerminationProtectionOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateTerminationProtection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTerminationProtectionInput,
    UpdateTerminationProtectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateTerminationProtectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateTerminationProtectionInput,
    UpdateTerminationProtectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateTerminationProtectionInput,
        UpdateTerminationProtectionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
