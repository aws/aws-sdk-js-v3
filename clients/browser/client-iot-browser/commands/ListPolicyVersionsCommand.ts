import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPolicyVersions } from "../model/operations/ListPolicyVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPolicyVersionsInput } from "../types/ListPolicyVersionsInput";
import { ListPolicyVersionsOutput } from "../types/ListPolicyVersionsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListPolicyVersionsInput";
export * from "../types/ListPolicyVersionsOutput";
export * from "../types/ListPolicyVersionsExceptionsUnion";

export class ListPolicyVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPolicyVersionsInput,
      OutputTypesUnion,
      ListPolicyVersionsOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListPolicyVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPolicyVersionsInput,
    ListPolicyVersionsOutput,
    Blob
  >();

  constructor(readonly input: ListPolicyVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPolicyVersionsInput,
    ListPolicyVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPolicyVersionsInput, ListPolicyVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
