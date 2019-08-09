import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateIdentityPool } from "../model/CreateIdentityPool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateIdentityPoolInput } from "../types/CreateIdentityPoolInput";
import { CreateIdentityPoolOutput } from "../types/CreateIdentityPoolOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/CreateIdentityPoolInput";
export * from "../types/CreateIdentityPoolOutput";
export * from "../types/CreateIdentityPoolExceptionsUnion";

export class CreateIdentityPoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateIdentityPoolInput,
      OutputTypesUnion,
      CreateIdentityPoolOutput,
      CognitoIdentityResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateIdentityPool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateIdentityPoolInput,
    CreateIdentityPoolOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateIdentityPoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateIdentityPoolInput,
    CreateIdentityPoolOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateIdentityPoolInput, CreateIdentityPoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
