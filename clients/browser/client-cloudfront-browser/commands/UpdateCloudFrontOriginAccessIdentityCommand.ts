import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateCloudFrontOriginAccessIdentity } from "../model/operations/UpdateCloudFrontOriginAccessIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCloudFrontOriginAccessIdentityInput } from "../types/UpdateCloudFrontOriginAccessIdentityInput";
import { UpdateCloudFrontOriginAccessIdentityOutput } from "../types/UpdateCloudFrontOriginAccessIdentityOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdateCloudFrontOriginAccessIdentityInput";
export * from "../types/UpdateCloudFrontOriginAccessIdentityOutput";
export * from "../types/UpdateCloudFrontOriginAccessIdentityExceptionsUnion";

export class UpdateCloudFrontOriginAccessIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCloudFrontOriginAccessIdentityInput,
      OutputTypesUnion,
      UpdateCloudFrontOriginAccessIdentityOutput,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateCloudFrontOriginAccessIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCloudFrontOriginAccessIdentityInput,
    UpdateCloudFrontOriginAccessIdentityOutput,
    Blob
  >();

  constructor(readonly input: UpdateCloudFrontOriginAccessIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCloudFrontOriginAccessIdentityInput,
    UpdateCloudFrontOriginAccessIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateCloudFrontOriginAccessIdentityInput,
        UpdateCloudFrontOriginAccessIdentityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
