import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResources } from "../model/GetResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourcesInput } from "../types/GetResourcesInput";
import { GetResourcesOutput } from "../types/GetResourcesOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/GetResourcesInput";
export * from "../types/GetResourcesOutput";
export * from "../types/GetResourcesExceptionsUnion";

export class GetResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourcesInput,
      OutputTypesUnion,
      GetResourcesOutput,
      WorkDocsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourcesInput,
    GetResourcesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetResourcesInput, GetResourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResourcesInput, GetResourcesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
