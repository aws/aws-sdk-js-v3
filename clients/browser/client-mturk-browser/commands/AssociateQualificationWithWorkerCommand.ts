import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateQualificationWithWorker } from "../model/AssociateQualificationWithWorker";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateQualificationWithWorkerInput } from "../types/AssociateQualificationWithWorkerInput";
import { AssociateQualificationWithWorkerOutput } from "../types/AssociateQualificationWithWorkerOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/AssociateQualificationWithWorkerInput";
export * from "../types/AssociateQualificationWithWorkerOutput";
export * from "../types/AssociateQualificationWithWorkerExceptionsUnion";

export class AssociateQualificationWithWorkerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateQualificationWithWorkerInput,
      OutputTypesUnion,
      AssociateQualificationWithWorkerOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateQualificationWithWorker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateQualificationWithWorkerInput,
    AssociateQualificationWithWorkerOutput,
    Blob
  >();

  constructor(readonly input: AssociateQualificationWithWorkerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateQualificationWithWorkerInput,
    AssociateQualificationWithWorkerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateQualificationWithWorkerInput,
        AssociateQualificationWithWorkerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
