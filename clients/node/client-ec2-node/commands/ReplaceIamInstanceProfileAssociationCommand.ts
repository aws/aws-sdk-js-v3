import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ReplaceIamInstanceProfileAssociation } from "../model/operations/ReplaceIamInstanceProfileAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReplaceIamInstanceProfileAssociationInput } from "../types/ReplaceIamInstanceProfileAssociationInput";
import { ReplaceIamInstanceProfileAssociationOutput } from "../types/ReplaceIamInstanceProfileAssociationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ReplaceIamInstanceProfileAssociationInput";
export * from "../types/ReplaceIamInstanceProfileAssociationOutput";
export * from "../types/ReplaceIamInstanceProfileAssociationExceptionsUnion";

export class ReplaceIamInstanceProfileAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReplaceIamInstanceProfileAssociationInput,
      OutputTypesUnion,
      ReplaceIamInstanceProfileAssociationOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ReplaceIamInstanceProfileAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReplaceIamInstanceProfileAssociationInput,
    ReplaceIamInstanceProfileAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: ReplaceIamInstanceProfileAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ReplaceIamInstanceProfileAssociationInput,
    ReplaceIamInstanceProfileAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ReplaceIamInstanceProfileAssociationInput,
        ReplaceIamInstanceProfileAssociationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
