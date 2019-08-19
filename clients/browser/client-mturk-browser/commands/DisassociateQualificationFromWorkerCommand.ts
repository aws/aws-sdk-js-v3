import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateQualificationFromWorker } from "../model/operations/DisassociateQualificationFromWorker";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateQualificationFromWorkerInput } from "../types/DisassociateQualificationFromWorkerInput";
import { DisassociateQualificationFromWorkerOutput } from "../types/DisassociateQualificationFromWorkerOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/DisassociateQualificationFromWorkerInput";
export * from "../types/DisassociateQualificationFromWorkerOutput";
export * from "../types/DisassociateQualificationFromWorkerExceptionsUnion";

export class DisassociateQualificationFromWorkerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateQualificationFromWorkerInput,
      OutputTypesUnion,
      DisassociateQualificationFromWorkerOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateQualificationFromWorker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateQualificationFromWorkerInput,
    DisassociateQualificationFromWorkerOutput,
    Blob
  >();

  constructor(readonly input: DisassociateQualificationFromWorkerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateQualificationFromWorkerInput,
    DisassociateQualificationFromWorkerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateQualificationFromWorkerInput,
        DisassociateQualificationFromWorkerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
