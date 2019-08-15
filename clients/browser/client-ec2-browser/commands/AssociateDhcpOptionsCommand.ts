import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateDhcpOptions } from "../model/operations/AssociateDhcpOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateDhcpOptionsInput } from "../types/AssociateDhcpOptionsInput";
import { AssociateDhcpOptionsOutput } from "../types/AssociateDhcpOptionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AssociateDhcpOptionsInput";
export * from "../types/AssociateDhcpOptionsOutput";
export * from "../types/AssociateDhcpOptionsExceptionsUnion";

export class AssociateDhcpOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateDhcpOptionsInput,
      OutputTypesUnion,
      AssociateDhcpOptionsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateDhcpOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateDhcpOptionsInput,
    AssociateDhcpOptionsOutput,
    Blob
  >();

  constructor(readonly input: AssociateDhcpOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateDhcpOptionsInput,
    AssociateDhcpOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateDhcpOptionsInput, AssociateDhcpOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
