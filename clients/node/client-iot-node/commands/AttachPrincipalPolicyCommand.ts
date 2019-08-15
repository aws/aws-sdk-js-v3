import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachPrincipalPolicy } from "../model/operations/AttachPrincipalPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachPrincipalPolicyInput } from "../types/AttachPrincipalPolicyInput";
import { AttachPrincipalPolicyOutput } from "../types/AttachPrincipalPolicyOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/AttachPrincipalPolicyInput";
export * from "../types/AttachPrincipalPolicyOutput";
export * from "../types/AttachPrincipalPolicyExceptionsUnion";

export class AttachPrincipalPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachPrincipalPolicyInput,
      OutputTypesUnion,
      AttachPrincipalPolicyOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachPrincipalPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachPrincipalPolicyInput,
    AttachPrincipalPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachPrincipalPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachPrincipalPolicyInput,
    AttachPrincipalPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachPrincipalPolicyInput, AttachPrincipalPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
