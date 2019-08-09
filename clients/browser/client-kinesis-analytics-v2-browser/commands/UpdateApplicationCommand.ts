import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateApplication } from "../model/UpdateApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApplicationInput } from "../types/UpdateApplicationInput";
import { UpdateApplicationOutput } from "../types/UpdateApplicationOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/UpdateApplicationInput";
export * from "../types/UpdateApplicationOutput";
export * from "../types/UpdateApplicationExceptionsUnion";

export class UpdateApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApplicationInput,
      OutputTypesUnion,
      UpdateApplicationOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApplicationInput,
    UpdateApplicationOutput,
    Blob
  >();

  constructor(readonly input: UpdateApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateApplicationInput, UpdateApplicationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateApplicationInput, UpdateApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
