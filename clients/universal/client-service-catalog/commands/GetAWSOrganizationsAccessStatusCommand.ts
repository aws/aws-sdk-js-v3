import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAWSOrganizationsAccessStatus } from "../model/GetAWSOrganizationsAccessStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAWSOrganizationsAccessStatusInput } from "../types/GetAWSOrganizationsAccessStatusInput";
import { GetAWSOrganizationsAccessStatusOutput } from "../types/GetAWSOrganizationsAccessStatusOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/GetAWSOrganizationsAccessStatusInput";
export * from "../types/GetAWSOrganizationsAccessStatusOutput";
export * from "../types/GetAWSOrganizationsAccessStatusExceptionsUnion";

export class GetAWSOrganizationsAccessStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAWSOrganizationsAccessStatusInput,
      OutputTypesUnion,
      GetAWSOrganizationsAccessStatusOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetAWSOrganizationsAccessStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAWSOrganizationsAccessStatusInput,
    GetAWSOrganizationsAccessStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: GetAWSOrganizationsAccessStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAWSOrganizationsAccessStatusInput,
    GetAWSOrganizationsAccessStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetAWSOrganizationsAccessStatusInput,
        GetAWSOrganizationsAccessStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
