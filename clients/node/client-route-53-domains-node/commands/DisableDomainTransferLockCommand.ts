import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableDomainTransferLock } from "../model/operations/DisableDomainTransferLock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableDomainTransferLockInput } from "../types/DisableDomainTransferLockInput";
import { DisableDomainTransferLockOutput } from "../types/DisableDomainTransferLockOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/DisableDomainTransferLockInput";
export * from "../types/DisableDomainTransferLockOutput";
export * from "../types/DisableDomainTransferLockExceptionsUnion";

export class DisableDomainTransferLockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableDomainTransferLockInput,
      OutputTypesUnion,
      DisableDomainTransferLockOutput,
      Route53DomainsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableDomainTransferLock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableDomainTransferLockInput,
    DisableDomainTransferLockOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableDomainTransferLockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableDomainTransferLockInput,
    DisableDomainTransferLockOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableDomainTransferLockInput, DisableDomainTransferLockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
