import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateInvalidation2019_03_26 } from "../model/CreateInvalidation2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInvalidation2019_03_26Input } from "../types/CreateInvalidation2019_03_26Input";
import { CreateInvalidation2019_03_26Output } from "../types/CreateInvalidation2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateInvalidation2019_03_26Input";
export * from "../types/CreateInvalidation2019_03_26Output";
export * from "../types/CreateInvalidation2019_03_26ExceptionsUnion";

export class CreateInvalidation2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInvalidation2019_03_26Input,
      OutputTypesUnion,
      CreateInvalidation2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = CreateInvalidation2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInvalidation2019_03_26Input,
    CreateInvalidation2019_03_26Output,
    Blob
  >();

  constructor(readonly input: CreateInvalidation2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateInvalidation2019_03_26Input,
    CreateInvalidation2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateInvalidation2019_03_26Input,
        CreateInvalidation2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
