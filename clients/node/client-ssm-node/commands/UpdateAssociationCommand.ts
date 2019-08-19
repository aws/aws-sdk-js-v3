import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAssociation } from "../model/operations/UpdateAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAssociationInput } from "../types/UpdateAssociationInput";
import { UpdateAssociationOutput } from "../types/UpdateAssociationOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdateAssociationInput";
export * from "../types/UpdateAssociationOutput";
export * from "../types/UpdateAssociationExceptionsUnion";

export class UpdateAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAssociationInput,
      OutputTypesUnion,
      UpdateAssociationOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAssociationInput,
    UpdateAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAssociationInput, UpdateAssociationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAssociationInput, UpdateAssociationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
