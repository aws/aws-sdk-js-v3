import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEndpointsByPlatformApplication } from "../model/ListEndpointsByPlatformApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEndpointsByPlatformApplicationInput } from "../types/ListEndpointsByPlatformApplicationInput";
import { ListEndpointsByPlatformApplicationOutput } from "../types/ListEndpointsByPlatformApplicationOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/ListEndpointsByPlatformApplicationInput";
export * from "../types/ListEndpointsByPlatformApplicationOutput";
export * from "../types/ListEndpointsByPlatformApplicationExceptionsUnion";

export class ListEndpointsByPlatformApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEndpointsByPlatformApplicationInput,
      OutputTypesUnion,
      ListEndpointsByPlatformApplicationOutput,
      SNSResolvedConfiguration,
      Blob
    > {
  readonly model = ListEndpointsByPlatformApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEndpointsByPlatformApplicationInput,
    ListEndpointsByPlatformApplicationOutput,
    Blob
  >();

  constructor(readonly input: ListEndpointsByPlatformApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListEndpointsByPlatformApplicationInput,
    ListEndpointsByPlatformApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListEndpointsByPlatformApplicationInput,
        ListEndpointsByPlatformApplicationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
