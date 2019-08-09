import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRelationalDatabaseBundles } from "../model/GetRelationalDatabaseBundles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabaseBundlesInput } from "../types/GetRelationalDatabaseBundlesInput";
import { GetRelationalDatabaseBundlesOutput } from "../types/GetRelationalDatabaseBundlesOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabaseBundlesInput";
export * from "../types/GetRelationalDatabaseBundlesOutput";
export * from "../types/GetRelationalDatabaseBundlesExceptionsUnion";

export class GetRelationalDatabaseBundlesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabaseBundlesInput,
      OutputTypesUnion,
      GetRelationalDatabaseBundlesOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetRelationalDatabaseBundles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseBundlesInput,
    GetRelationalDatabaseBundlesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetRelationalDatabaseBundlesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabaseBundlesInput,
    GetRelationalDatabaseBundlesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRelationalDatabaseBundlesInput,
        GetRelationalDatabaseBundlesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
