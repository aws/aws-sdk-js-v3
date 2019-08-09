import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyInstanceCreditSpecification } from "../model/ModifyInstanceCreditSpecification";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyInstanceCreditSpecificationInput } from "../types/ModifyInstanceCreditSpecificationInput";
import { ModifyInstanceCreditSpecificationOutput } from "../types/ModifyInstanceCreditSpecificationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyInstanceCreditSpecificationInput";
export * from "../types/ModifyInstanceCreditSpecificationOutput";
export * from "../types/ModifyInstanceCreditSpecificationExceptionsUnion";

export class ModifyInstanceCreditSpecificationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyInstanceCreditSpecificationInput,
      OutputTypesUnion,
      ModifyInstanceCreditSpecificationOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyInstanceCreditSpecification;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyInstanceCreditSpecificationInput,
    ModifyInstanceCreditSpecificationOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyInstanceCreditSpecificationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyInstanceCreditSpecificationInput,
    ModifyInstanceCreditSpecificationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyInstanceCreditSpecificationInput,
        ModifyInstanceCreditSpecificationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
