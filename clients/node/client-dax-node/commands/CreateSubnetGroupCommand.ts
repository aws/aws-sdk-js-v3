import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSubnetGroup } from "../model/CreateSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSubnetGroupInput } from "../types/CreateSubnetGroupInput";
import { CreateSubnetGroupOutput } from "../types/CreateSubnetGroupOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/CreateSubnetGroupInput";
export * from "../types/CreateSubnetGroupOutput";
export * from "../types/CreateSubnetGroupExceptionsUnion";

export class CreateSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSubnetGroupInput,
      OutputTypesUnion,
      CreateSubnetGroupOutput,
      DAXResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSubnetGroupInput,
    CreateSubnetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSubnetGroupInput, CreateSubnetGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSubnetGroupInput, CreateSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
