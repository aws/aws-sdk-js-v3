import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateCrawler } from "../model/UpdateCrawler";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCrawlerInput } from "../types/UpdateCrawlerInput";
import { UpdateCrawlerOutput } from "../types/UpdateCrawlerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/UpdateCrawlerInput";
export * from "../types/UpdateCrawlerOutput";
export * from "../types/UpdateCrawlerExceptionsUnion";

export class UpdateCrawlerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCrawlerInput,
      OutputTypesUnion,
      UpdateCrawlerOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateCrawler;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCrawlerInput,
    UpdateCrawlerOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateCrawlerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateCrawlerInput, UpdateCrawlerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateCrawlerInput, UpdateCrawlerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
