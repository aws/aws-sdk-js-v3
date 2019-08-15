import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSampleFindings } from "../model/operations/CreateSampleFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSampleFindingsInput } from "../types/CreateSampleFindingsInput";
import { CreateSampleFindingsOutput } from "../types/CreateSampleFindingsOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/CreateSampleFindingsInput";
export * from "../types/CreateSampleFindingsOutput";
export * from "../types/CreateSampleFindingsExceptionsUnion";

export class CreateSampleFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSampleFindingsInput,
      OutputTypesUnion,
      CreateSampleFindingsOutput,
      GuardDutyResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSampleFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSampleFindingsInput,
    CreateSampleFindingsOutput,
    Blob
  >();

  constructor(readonly input: CreateSampleFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSampleFindingsInput,
    CreateSampleFindingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSampleFindingsInput, CreateSampleFindingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
