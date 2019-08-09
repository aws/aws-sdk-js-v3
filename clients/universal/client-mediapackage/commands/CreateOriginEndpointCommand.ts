import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateOriginEndpoint } from "../model/CreateOriginEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateOriginEndpointInput } from "../types/CreateOriginEndpointInput";
import { CreateOriginEndpointOutput } from "../types/CreateOriginEndpointOutput";
import { MediaPackageResolvedConfiguration } from "../MediaPackageConfiguration";
export * from "../types/CreateOriginEndpointInput";
export * from "../types/CreateOriginEndpointOutput";
export * from "../types/CreateOriginEndpointExceptionsUnion";

export class CreateOriginEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateOriginEndpointInput,
      OutputTypesUnion,
      CreateOriginEndpointOutput,
      MediaPackageResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateOriginEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateOriginEndpointInput,
    CreateOriginEndpointOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateOriginEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaPackageResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateOriginEndpointInput,
    CreateOriginEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateOriginEndpointInput, CreateOriginEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
