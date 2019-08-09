import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetIdentityPolicies } from "../model/GetIdentityPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIdentityPoliciesInput } from "../types/GetIdentityPoliciesInput";
import { GetIdentityPoliciesOutput } from "../types/GetIdentityPoliciesOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/GetIdentityPoliciesInput";
export * from "../types/GetIdentityPoliciesOutput";
export * from "../types/GetIdentityPoliciesExceptionsUnion";

export class GetIdentityPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIdentityPoliciesInput,
      OutputTypesUnion,
      GetIdentityPoliciesOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetIdentityPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityPoliciesInput,
    GetIdentityPoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetIdentityPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIdentityPoliciesInput,
    GetIdentityPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIdentityPoliciesInput, GetIdentityPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
