import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateIamInstanceProfile } from "../model/operations/DisassociateIamInstanceProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateIamInstanceProfileInput } from "../types/DisassociateIamInstanceProfileInput";
import { DisassociateIamInstanceProfileOutput } from "../types/DisassociateIamInstanceProfileOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisassociateIamInstanceProfileInput";
export * from "../types/DisassociateIamInstanceProfileOutput";
export * from "../types/DisassociateIamInstanceProfileExceptionsUnion";

export class DisassociateIamInstanceProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateIamInstanceProfileInput,
      OutputTypesUnion,
      DisassociateIamInstanceProfileOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateIamInstanceProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateIamInstanceProfileInput,
    DisassociateIamInstanceProfileOutput,
    Blob
  >();

  constructor(readonly input: DisassociateIamInstanceProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateIamInstanceProfileInput,
    DisassociateIamInstanceProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateIamInstanceProfileInput,
        DisassociateIamInstanceProfileOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
