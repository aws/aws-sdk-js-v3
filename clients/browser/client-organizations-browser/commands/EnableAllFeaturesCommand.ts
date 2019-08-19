import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableAllFeatures } from "../model/operations/EnableAllFeatures";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableAllFeaturesInput } from "../types/EnableAllFeaturesInput";
import { EnableAllFeaturesOutput } from "../types/EnableAllFeaturesOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/EnableAllFeaturesInput";
export * from "../types/EnableAllFeaturesOutput";
export * from "../types/EnableAllFeaturesExceptionsUnion";

export class EnableAllFeaturesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableAllFeaturesInput,
      OutputTypesUnion,
      EnableAllFeaturesOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = EnableAllFeatures;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableAllFeaturesInput,
    EnableAllFeaturesOutput,
    Blob
  >();

  constructor(readonly input: EnableAllFeaturesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableAllFeaturesInput, EnableAllFeaturesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableAllFeaturesInput, EnableAllFeaturesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
