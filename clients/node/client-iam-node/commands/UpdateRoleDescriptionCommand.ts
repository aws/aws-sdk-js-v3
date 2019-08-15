import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRoleDescription } from "../model/operations/UpdateRoleDescription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRoleDescriptionInput } from "../types/UpdateRoleDescriptionInput";
import { UpdateRoleDescriptionOutput } from "../types/UpdateRoleDescriptionOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateRoleDescriptionInput";
export * from "../types/UpdateRoleDescriptionOutput";
export * from "../types/UpdateRoleDescriptionExceptionsUnion";

export class UpdateRoleDescriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRoleDescriptionInput,
      OutputTypesUnion,
      UpdateRoleDescriptionOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRoleDescription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRoleDescriptionInput,
    UpdateRoleDescriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRoleDescriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRoleDescriptionInput,
    UpdateRoleDescriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRoleDescriptionInput, UpdateRoleDescriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
