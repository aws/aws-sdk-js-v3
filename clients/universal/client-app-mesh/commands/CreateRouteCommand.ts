import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRoute } from "../model/CreateRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRouteInput } from "../types/CreateRouteInput";
import { CreateRouteOutput } from "../types/CreateRouteOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/CreateRouteInput";
export * from "../types/CreateRouteOutput";
export * from "../types/CreateRouteExceptionsUnion";

export class CreateRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRouteInput,
      OutputTypesUnion,
      CreateRouteOutput,
      AppMeshResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRouteInput,
    CreateRouteOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRouteInput, CreateRouteOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRouteInput, CreateRouteOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
