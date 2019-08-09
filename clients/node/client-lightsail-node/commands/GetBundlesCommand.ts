import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetBundles } from "../model/GetBundles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBundlesInput } from "../types/GetBundlesInput";
import { GetBundlesOutput } from "../types/GetBundlesOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetBundlesInput";
export * from "../types/GetBundlesOutput";
export * from "../types/GetBundlesExceptionsUnion";

export class GetBundlesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBundlesInput,
      OutputTypesUnion,
      GetBundlesOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetBundles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBundlesInput,
    GetBundlesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetBundlesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBundlesInput, GetBundlesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBundlesInput, GetBundlesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
