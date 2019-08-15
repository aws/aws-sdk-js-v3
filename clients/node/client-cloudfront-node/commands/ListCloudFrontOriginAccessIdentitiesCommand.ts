import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListCloudFrontOriginAccessIdentities } from "../model/operations/ListCloudFrontOriginAccessIdentities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCloudFrontOriginAccessIdentitiesInput } from "../types/ListCloudFrontOriginAccessIdentitiesInput";
import { ListCloudFrontOriginAccessIdentitiesOutput } from "../types/ListCloudFrontOriginAccessIdentitiesOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListCloudFrontOriginAccessIdentitiesInput";
export * from "../types/ListCloudFrontOriginAccessIdentitiesOutput";
export * from "../types/ListCloudFrontOriginAccessIdentitiesExceptionsUnion";

export class ListCloudFrontOriginAccessIdentitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCloudFrontOriginAccessIdentitiesInput,
      OutputTypesUnion,
      ListCloudFrontOriginAccessIdentitiesOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListCloudFrontOriginAccessIdentities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCloudFrontOriginAccessIdentitiesInput,
    ListCloudFrontOriginAccessIdentitiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListCloudFrontOriginAccessIdentitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCloudFrontOriginAccessIdentitiesInput,
    ListCloudFrontOriginAccessIdentitiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListCloudFrontOriginAccessIdentitiesInput,
        ListCloudFrontOriginAccessIdentitiesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
