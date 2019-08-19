import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListObjectPolicies } from "../model/operations/ListObjectPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListObjectPoliciesInput } from "../types/ListObjectPoliciesInput";
import { ListObjectPoliciesOutput } from "../types/ListObjectPoliciesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListObjectPoliciesInput";
export * from "../types/ListObjectPoliciesOutput";
export * from "../types/ListObjectPoliciesExceptionsUnion";

export class ListObjectPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListObjectPoliciesInput,
      OutputTypesUnion,
      ListObjectPoliciesOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListObjectPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListObjectPoliciesInput,
    ListObjectPoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListObjectPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListObjectPoliciesInput,
    ListObjectPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListObjectPoliciesInput, ListObjectPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
