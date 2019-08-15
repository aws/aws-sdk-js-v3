import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateIdentityPool } from "../model/operations/UpdateIdentityPool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateIdentityPoolInput } from "../types/UpdateIdentityPoolInput";
import { UpdateIdentityPoolOutput } from "../types/UpdateIdentityPoolOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/UpdateIdentityPoolInput";
export * from "../types/UpdateIdentityPoolOutput";
export * from "../types/UpdateIdentityPoolExceptionsUnion";

export class UpdateIdentityPoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateIdentityPoolInput,
      OutputTypesUnion,
      UpdateIdentityPoolOutput,
      CognitoIdentityResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateIdentityPool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateIdentityPoolInput,
    UpdateIdentityPoolOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateIdentityPoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateIdentityPoolInput,
    UpdateIdentityPoolOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateIdentityPoolInput, UpdateIdentityPoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
