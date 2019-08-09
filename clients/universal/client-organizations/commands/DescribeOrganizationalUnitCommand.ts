import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeOrganizationalUnit } from "../model/DescribeOrganizationalUnit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOrganizationalUnitInput } from "../types/DescribeOrganizationalUnitInput";
import { DescribeOrganizationalUnitOutput } from "../types/DescribeOrganizationalUnitOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DescribeOrganizationalUnitInput";
export * from "../types/DescribeOrganizationalUnitOutput";
export * from "../types/DescribeOrganizationalUnitExceptionsUnion";

export class DescribeOrganizationalUnitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOrganizationalUnitInput,
      OutputTypesUnion,
      DescribeOrganizationalUnitOutput,
      OrganizationsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeOrganizationalUnit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOrganizationalUnitInput,
    DescribeOrganizationalUnitOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeOrganizationalUnitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOrganizationalUnitInput,
    DescribeOrganizationalUnitOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeOrganizationalUnitInput,
        DescribeOrganizationalUnitOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
