import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateRouteTable } from "../model/AssociateRouteTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateRouteTableInput } from "../types/AssociateRouteTableInput";
import { AssociateRouteTableOutput } from "../types/AssociateRouteTableOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AssociateRouteTableInput";
export * from "../types/AssociateRouteTableOutput";
export * from "../types/AssociateRouteTableExceptionsUnion";

export class AssociateRouteTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateRouteTableInput,
      OutputTypesUnion,
      AssociateRouteTableOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateRouteTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateRouteTableInput,
    AssociateRouteTableOutput,
    Blob
  >();

  constructor(readonly input: AssociateRouteTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateRouteTableInput,
    AssociateRouteTableOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateRouteTableInput, AssociateRouteTableOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
