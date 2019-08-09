import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRouteTable } from "../model/CreateRouteTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRouteTableInput } from "../types/CreateRouteTableInput";
import { CreateRouteTableOutput } from "../types/CreateRouteTableOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateRouteTableInput";
export * from "../types/CreateRouteTableOutput";
export * from "../types/CreateRouteTableExceptionsUnion";

export class CreateRouteTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRouteTableInput,
      OutputTypesUnion,
      CreateRouteTableOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRouteTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRouteTableInput,
    CreateRouteTableOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRouteTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRouteTableInput, CreateRouteTableOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRouteTableInput, CreateRouteTableOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
