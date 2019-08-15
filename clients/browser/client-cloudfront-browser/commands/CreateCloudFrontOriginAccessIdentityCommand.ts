import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCloudFrontOriginAccessIdentity } from "../model/operations/CreateCloudFrontOriginAccessIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCloudFrontOriginAccessIdentityInput } from "../types/CreateCloudFrontOriginAccessIdentityInput";
import { CreateCloudFrontOriginAccessIdentityOutput } from "../types/CreateCloudFrontOriginAccessIdentityOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateCloudFrontOriginAccessIdentityInput";
export * from "../types/CreateCloudFrontOriginAccessIdentityOutput";
export * from "../types/CreateCloudFrontOriginAccessIdentityExceptionsUnion";

export class CreateCloudFrontOriginAccessIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCloudFrontOriginAccessIdentityInput,
      OutputTypesUnion,
      CreateCloudFrontOriginAccessIdentityOutput,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCloudFrontOriginAccessIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCloudFrontOriginAccessIdentityInput,
    CreateCloudFrontOriginAccessIdentityOutput,
    Blob
  >();

  constructor(readonly input: CreateCloudFrontOriginAccessIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCloudFrontOriginAccessIdentityInput,
    CreateCloudFrontOriginAccessIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateCloudFrontOriginAccessIdentityInput,
        CreateCloudFrontOriginAccessIdentityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
