import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBlueprints } from "../model/GetBlueprints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBlueprintsInput } from "../types/GetBlueprintsInput";
import { GetBlueprintsOutput } from "../types/GetBlueprintsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetBlueprintsInput";
export * from "../types/GetBlueprintsOutput";
export * from "../types/GetBlueprintsExceptionsUnion";

export class GetBlueprintsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBlueprintsInput,
      OutputTypesUnion,
      GetBlueprintsOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetBlueprints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBlueprintsInput,
    GetBlueprintsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetBlueprintsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetBlueprintsInput, GetBlueprintsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBlueprintsInput, GetBlueprintsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
