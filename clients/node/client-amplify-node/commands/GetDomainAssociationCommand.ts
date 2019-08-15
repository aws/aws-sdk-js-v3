import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDomainAssociation } from "../model/operations/GetDomainAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDomainAssociationInput } from "../types/GetDomainAssociationInput";
import { GetDomainAssociationOutput } from "../types/GetDomainAssociationOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/GetDomainAssociationInput";
export * from "../types/GetDomainAssociationOutput";
export * from "../types/GetDomainAssociationExceptionsUnion";

export class GetDomainAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDomainAssociationInput,
      OutputTypesUnion,
      GetDomainAssociationOutput,
      AmplifyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDomainAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDomainAssociationInput,
    GetDomainAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDomainAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDomainAssociationInput,
    GetDomainAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDomainAssociationInput, GetDomainAssociationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
