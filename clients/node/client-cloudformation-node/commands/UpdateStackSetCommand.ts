import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateStackSet } from "../model/operations/UpdateStackSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateStackSetInput } from "../types/UpdateStackSetInput";
import { UpdateStackSetOutput } from "../types/UpdateStackSetOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/UpdateStackSetInput";
export * from "../types/UpdateStackSetOutput";
export * from "../types/UpdateStackSetExceptionsUnion";

export class UpdateStackSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateStackSetInput,
      OutputTypesUnion,
      UpdateStackSetOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateStackSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateStackSetInput,
    UpdateStackSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateStackSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateStackSetInput, UpdateStackSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateStackSetInput, UpdateStackSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
