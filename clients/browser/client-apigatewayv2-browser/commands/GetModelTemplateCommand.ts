import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetModelTemplate } from "../model/operations/GetModelTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetModelTemplateInput } from "../types/GetModelTemplateInput";
import { GetModelTemplateOutput } from "../types/GetModelTemplateOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetModelTemplateInput";
export * from "../types/GetModelTemplateOutput";
export * from "../types/GetModelTemplateExceptionsUnion";

export class GetModelTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetModelTemplateInput,
      OutputTypesUnion,
      GetModelTemplateOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetModelTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetModelTemplateInput,
    GetModelTemplateOutput,
    Blob
  >();

  constructor(readonly input: GetModelTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetModelTemplateInput, GetModelTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetModelTemplateInput, GetModelTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
