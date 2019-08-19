import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAssociationStatus } from "../model/operations/UpdateAssociationStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAssociationStatusInput } from "../types/UpdateAssociationStatusInput";
import { UpdateAssociationStatusOutput } from "../types/UpdateAssociationStatusOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdateAssociationStatusInput";
export * from "../types/UpdateAssociationStatusOutput";
export * from "../types/UpdateAssociationStatusExceptionsUnion";

export class UpdateAssociationStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAssociationStatusInput,
      OutputTypesUnion,
      UpdateAssociationStatusOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAssociationStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAssociationStatusInput,
    UpdateAssociationStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAssociationStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAssociationStatusInput,
    UpdateAssociationStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAssociationStatusInput, UpdateAssociationStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
