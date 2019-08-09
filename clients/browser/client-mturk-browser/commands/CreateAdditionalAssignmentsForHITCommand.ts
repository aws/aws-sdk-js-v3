import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAdditionalAssignmentsForHIT } from "../model/CreateAdditionalAssignmentsForHIT";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAdditionalAssignmentsForHITInput } from "../types/CreateAdditionalAssignmentsForHITInput";
import { CreateAdditionalAssignmentsForHITOutput } from "../types/CreateAdditionalAssignmentsForHITOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/CreateAdditionalAssignmentsForHITInput";
export * from "../types/CreateAdditionalAssignmentsForHITOutput";
export * from "../types/CreateAdditionalAssignmentsForHITExceptionsUnion";

export class CreateAdditionalAssignmentsForHITCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAdditionalAssignmentsForHITInput,
      OutputTypesUnion,
      CreateAdditionalAssignmentsForHITOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = CreateAdditionalAssignmentsForHIT;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAdditionalAssignmentsForHITInput,
    CreateAdditionalAssignmentsForHITOutput,
    Blob
  >();

  constructor(readonly input: CreateAdditionalAssignmentsForHITInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateAdditionalAssignmentsForHITInput,
    CreateAdditionalAssignmentsForHITOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateAdditionalAssignmentsForHITInput,
        CreateAdditionalAssignmentsForHITOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
