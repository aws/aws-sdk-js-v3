import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssignInstance } from "../model/AssignInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssignInstanceInput } from "../types/AssignInstanceInput";
import { AssignInstanceOutput } from "../types/AssignInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/AssignInstanceInput";
export * from "../types/AssignInstanceOutput";
export * from "../types/AssignInstanceExceptionsUnion";

export class AssignInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssignInstanceInput,
      OutputTypesUnion,
      AssignInstanceOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssignInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssignInstanceInput,
    AssignInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssignInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<AssignInstanceInput, AssignInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssignInstanceInput, AssignInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
