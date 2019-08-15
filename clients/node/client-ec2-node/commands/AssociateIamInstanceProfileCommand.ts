import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateIamInstanceProfile } from "../model/operations/AssociateIamInstanceProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateIamInstanceProfileInput } from "../types/AssociateIamInstanceProfileInput";
import { AssociateIamInstanceProfileOutput } from "../types/AssociateIamInstanceProfileOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AssociateIamInstanceProfileInput";
export * from "../types/AssociateIamInstanceProfileOutput";
export * from "../types/AssociateIamInstanceProfileExceptionsUnion";

export class AssociateIamInstanceProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateIamInstanceProfileInput,
      OutputTypesUnion,
      AssociateIamInstanceProfileOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateIamInstanceProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateIamInstanceProfileInput,
    AssociateIamInstanceProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateIamInstanceProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateIamInstanceProfileInput,
    AssociateIamInstanceProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateIamInstanceProfileInput,
        AssociateIamInstanceProfileOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
