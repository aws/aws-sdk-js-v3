import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListLabelingJobsForWorkteam } from "../model/ListLabelingJobsForWorkteam";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLabelingJobsForWorkteamInput } from "../types/ListLabelingJobsForWorkteamInput";
import { ListLabelingJobsForWorkteamOutput } from "../types/ListLabelingJobsForWorkteamOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListLabelingJobsForWorkteamInput";
export * from "../types/ListLabelingJobsForWorkteamOutput";
export * from "../types/ListLabelingJobsForWorkteamExceptionsUnion";

export class ListLabelingJobsForWorkteamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLabelingJobsForWorkteamInput,
      OutputTypesUnion,
      ListLabelingJobsForWorkteamOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListLabelingJobsForWorkteam;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLabelingJobsForWorkteamInput,
    ListLabelingJobsForWorkteamOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListLabelingJobsForWorkteamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListLabelingJobsForWorkteamInput,
    ListLabelingJobsForWorkteamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListLabelingJobsForWorkteamInput,
        ListLabelingJobsForWorkteamOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
