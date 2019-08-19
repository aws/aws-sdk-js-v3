import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdatePolicy } from "../model/operations/UpdatePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePolicyInput } from "../types/UpdatePolicyInput";
import { UpdatePolicyOutput } from "../types/UpdatePolicyOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/UpdatePolicyInput";
export * from "../types/UpdatePolicyOutput";
export * from "../types/UpdatePolicyExceptionsUnion";

export class UpdatePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePolicyInput,
      OutputTypesUnion,
      UpdatePolicyOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdatePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePolicyInput,
    UpdatePolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdatePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdatePolicyInput, UpdatePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePolicyInput, UpdatePolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
