import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnablePolicyType } from "../model/operations/EnablePolicyType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnablePolicyTypeInput } from "../types/EnablePolicyTypeInput";
import { EnablePolicyTypeOutput } from "../types/EnablePolicyTypeOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/EnablePolicyTypeInput";
export * from "../types/EnablePolicyTypeOutput";
export * from "../types/EnablePolicyTypeExceptionsUnion";

export class EnablePolicyTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnablePolicyTypeInput,
      OutputTypesUnion,
      EnablePolicyTypeOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnablePolicyType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnablePolicyTypeInput,
    EnablePolicyTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnablePolicyTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<EnablePolicyTypeInput, EnablePolicyTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnablePolicyTypeInput, EnablePolicyTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
