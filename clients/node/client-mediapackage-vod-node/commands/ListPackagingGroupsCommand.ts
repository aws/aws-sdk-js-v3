import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPackagingGroups } from "../model/operations/ListPackagingGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPackagingGroupsInput } from "../types/ListPackagingGroupsInput";
import { ListPackagingGroupsOutput } from "../types/ListPackagingGroupsOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/ListPackagingGroupsInput";
export * from "../types/ListPackagingGroupsOutput";
export * from "../types/ListPackagingGroupsExceptionsUnion";

export class ListPackagingGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPackagingGroupsInput,
      OutputTypesUnion,
      ListPackagingGroupsOutput,
      MediaPackageVodResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPackagingGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPackagingGroupsInput,
    ListPackagingGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPackagingGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPackagingGroupsInput,
    ListPackagingGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPackagingGroupsInput, ListPackagingGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
