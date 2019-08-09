import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePlacementGroup } from "../model/CreatePlacementGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePlacementGroupInput } from "../types/CreatePlacementGroupInput";
import { CreatePlacementGroupOutput } from "../types/CreatePlacementGroupOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreatePlacementGroupInput";
export * from "../types/CreatePlacementGroupOutput";
export * from "../types/CreatePlacementGroupExceptionsUnion";

export class CreatePlacementGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePlacementGroupInput,
      OutputTypesUnion,
      CreatePlacementGroupOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePlacementGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePlacementGroupInput,
    CreatePlacementGroupOutput,
    Blob
  >();

  constructor(readonly input: CreatePlacementGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePlacementGroupInput,
    CreatePlacementGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePlacementGroupInput, CreatePlacementGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
