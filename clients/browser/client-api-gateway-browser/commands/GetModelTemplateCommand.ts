import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetModelTemplate } from "../model/GetModelTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetModelTemplateInput } from "../types/GetModelTemplateInput";
import { GetModelTemplateOutput } from "../types/GetModelTemplateOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
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
      APIGatewayResolvedConfiguration,
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
    configuration: APIGatewayResolvedConfiguration
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
