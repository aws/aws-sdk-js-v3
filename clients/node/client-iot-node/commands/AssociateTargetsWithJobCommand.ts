import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateTargetsWithJob } from "../model/operations/AssociateTargetsWithJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateTargetsWithJobInput } from "../types/AssociateTargetsWithJobInput";
import { AssociateTargetsWithJobOutput } from "../types/AssociateTargetsWithJobOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/AssociateTargetsWithJobInput";
export * from "../types/AssociateTargetsWithJobOutput";
export * from "../types/AssociateTargetsWithJobExceptionsUnion";

export class AssociateTargetsWithJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateTargetsWithJobInput,
      OutputTypesUnion,
      AssociateTargetsWithJobOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateTargetsWithJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateTargetsWithJobInput,
    AssociateTargetsWithJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateTargetsWithJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateTargetsWithJobInput,
    AssociateTargetsWithJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateTargetsWithJobInput, AssociateTargetsWithJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
