import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetContact } from "../model/operations/GetContact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetContactInput } from "../types/GetContactInput";
import { GetContactOutput } from "../types/GetContactOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetContactInput";
export * from "../types/GetContactOutput";
export * from "../types/GetContactExceptionsUnion";

export class GetContactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetContactInput,
      OutputTypesUnion,
      GetContactOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = GetContact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetContactInput,
    GetContactOutput,
    Blob
  >();

  constructor(readonly input: GetContactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<GetContactInput, GetContactOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetContactInput, GetContactOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
