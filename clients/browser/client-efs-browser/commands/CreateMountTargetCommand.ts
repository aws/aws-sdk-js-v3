import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMountTarget } from "../model/operations/CreateMountTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMountTargetInput } from "../types/CreateMountTargetInput";
import { CreateMountTargetOutput } from "../types/CreateMountTargetOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
export * from "../types/CreateMountTargetInput";
export * from "../types/CreateMountTargetOutput";
export * from "../types/CreateMountTargetExceptionsUnion";

export class CreateMountTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMountTargetInput,
      OutputTypesUnion,
      CreateMountTargetOutput,
      EFSResolvedConfiguration,
      Blob
    > {
  readonly model = CreateMountTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMountTargetInput,
    CreateMountTargetOutput,
    Blob
  >();

  constructor(readonly input: CreateMountTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EFSResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateMountTargetInput, CreateMountTargetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateMountTargetInput, CreateMountTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
