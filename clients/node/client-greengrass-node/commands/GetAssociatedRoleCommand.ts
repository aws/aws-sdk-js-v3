import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAssociatedRole } from "../model/GetAssociatedRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAssociatedRoleInput } from "../types/GetAssociatedRoleInput";
import { GetAssociatedRoleOutput } from "../types/GetAssociatedRoleOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetAssociatedRoleInput";
export * from "../types/GetAssociatedRoleOutput";
export * from "../types/GetAssociatedRoleExceptionsUnion";

export class GetAssociatedRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAssociatedRoleInput,
      OutputTypesUnion,
      GetAssociatedRoleOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAssociatedRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAssociatedRoleInput,
    GetAssociatedRoleOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAssociatedRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAssociatedRoleInput, GetAssociatedRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAssociatedRoleInput, GetAssociatedRoleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
