import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListClusters } from "../model/operations/ListClusters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListClustersInput } from "../types/ListClustersInput";
import { ListClustersOutput } from "../types/ListClustersOutput";
import { EKSResolvedConfiguration } from "../EKSConfiguration";
export * from "../types/ListClustersInput";
export * from "../types/ListClustersOutput";
export * from "../types/ListClustersExceptionsUnion";

export class ListClustersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListClustersInput,
      OutputTypesUnion,
      ListClustersOutput,
      EKSResolvedConfiguration,
      Blob
    > {
  readonly model = ListClusters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListClustersInput,
    ListClustersOutput,
    Blob
  >();

  constructor(readonly input: ListClustersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EKSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListClustersInput, ListClustersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListClustersInput, ListClustersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
