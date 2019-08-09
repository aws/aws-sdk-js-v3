import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAssignmentsForHIT } from "../model/ListAssignmentsForHIT";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssignmentsForHITInput } from "../types/ListAssignmentsForHITInput";
import { ListAssignmentsForHITOutput } from "../types/ListAssignmentsForHITOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ListAssignmentsForHITInput";
export * from "../types/ListAssignmentsForHITOutput";
export * from "../types/ListAssignmentsForHITExceptionsUnion";

export class ListAssignmentsForHITCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssignmentsForHITInput,
      OutputTypesUnion,
      ListAssignmentsForHITOutput,
      MTurkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListAssignmentsForHIT;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssignmentsForHITInput,
    ListAssignmentsForHITOutput,
    Uint8Array
  >();

  constructor(readonly input: ListAssignmentsForHITInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAssignmentsForHITInput,
    ListAssignmentsForHITOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssignmentsForHITInput, ListAssignmentsForHITOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
