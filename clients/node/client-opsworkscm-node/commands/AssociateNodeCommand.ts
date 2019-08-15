import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateNode } from "../model/operations/AssociateNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateNodeInput } from "../types/AssociateNodeInput";
import { AssociateNodeOutput } from "../types/AssociateNodeOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/AssociateNodeInput";
export * from "../types/AssociateNodeOutput";
export * from "../types/AssociateNodeExceptionsUnion";

export class AssociateNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateNodeInput,
      OutputTypesUnion,
      AssociateNodeOutput,
      OpsWorksCMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateNodeInput,
    AssociateNodeOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<AssociateNodeInput, AssociateNodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateNodeInput, AssociateNodeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
