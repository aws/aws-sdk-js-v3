import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = CreateMountTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMountTargetInput,
    CreateMountTargetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateMountTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
