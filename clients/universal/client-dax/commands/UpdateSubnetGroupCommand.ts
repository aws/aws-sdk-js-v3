import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSubnetGroup } from "../model/UpdateSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSubnetGroupInput } from "../types/UpdateSubnetGroupInput";
import { UpdateSubnetGroupOutput } from "../types/UpdateSubnetGroupOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/UpdateSubnetGroupInput";
export * from "../types/UpdateSubnetGroupOutput";
export * from "../types/UpdateSubnetGroupExceptionsUnion";

export class UpdateSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSubnetGroupInput,
      OutputTypesUnion,
      UpdateSubnetGroupOutput,
      DAXResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSubnetGroupInput,
    UpdateSubnetGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateSubnetGroupInput, UpdateSubnetGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSubnetGroupInput, UpdateSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
