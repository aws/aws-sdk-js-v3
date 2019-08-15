import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateGovCloudAccount } from "../model/operations/CreateGovCloudAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGovCloudAccountInput } from "../types/CreateGovCloudAccountInput";
import { CreateGovCloudAccountOutput } from "../types/CreateGovCloudAccountOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/CreateGovCloudAccountInput";
export * from "../types/CreateGovCloudAccountOutput";
export * from "../types/CreateGovCloudAccountExceptionsUnion";

export class CreateGovCloudAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGovCloudAccountInput,
      OutputTypesUnion,
      CreateGovCloudAccountOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateGovCloudAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGovCloudAccountInput,
    CreateGovCloudAccountOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateGovCloudAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateGovCloudAccountInput,
    CreateGovCloudAccountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateGovCloudAccountInput, CreateGovCloudAccountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
