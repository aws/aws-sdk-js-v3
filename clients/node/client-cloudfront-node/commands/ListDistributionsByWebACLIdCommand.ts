import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDistributionsByWebACLId } from "../model/operations/ListDistributionsByWebACLId";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDistributionsByWebACLIdInput } from "../types/ListDistributionsByWebACLIdInput";
import { ListDistributionsByWebACLIdOutput } from "../types/ListDistributionsByWebACLIdOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListDistributionsByWebACLIdInput";
export * from "../types/ListDistributionsByWebACLIdOutput";
export * from "../types/ListDistributionsByWebACLIdExceptionsUnion";

export class ListDistributionsByWebACLIdCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDistributionsByWebACLIdInput,
      OutputTypesUnion,
      ListDistributionsByWebACLIdOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDistributionsByWebACLId;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDistributionsByWebACLIdInput,
    ListDistributionsByWebACLIdOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDistributionsByWebACLIdInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDistributionsByWebACLIdInput,
    ListDistributionsByWebACLIdOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListDistributionsByWebACLIdInput,
        ListDistributionsByWebACLIdOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
