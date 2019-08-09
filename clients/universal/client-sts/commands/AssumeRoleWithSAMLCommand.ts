import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssumeRoleWithSAML } from "../model/AssumeRoleWithSAML";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssumeRoleWithSAMLInput } from "../types/AssumeRoleWithSAMLInput";
import { AssumeRoleWithSAMLOutput } from "../types/AssumeRoleWithSAMLOutput";
import { STSResolvedConfiguration } from "../STSConfiguration";
export * from "../types/AssumeRoleWithSAMLInput";
export * from "../types/AssumeRoleWithSAMLOutput";
export * from "../types/AssumeRoleWithSAMLExceptionsUnion";

export class AssumeRoleWithSAMLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssumeRoleWithSAMLInput,
      OutputTypesUnion,
      AssumeRoleWithSAMLOutput,
      STSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssumeRoleWithSAML;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssumeRoleWithSAMLInput,
    AssumeRoleWithSAMLOutput,
    Uint8Array
  >();

  constructor(readonly input: AssumeRoleWithSAMLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: STSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssumeRoleWithSAMLInput,
    AssumeRoleWithSAMLOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssumeRoleWithSAMLInput, AssumeRoleWithSAMLOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
