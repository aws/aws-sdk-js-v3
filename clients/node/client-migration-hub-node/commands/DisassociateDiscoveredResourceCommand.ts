import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateDiscoveredResource } from "../model/operations/DisassociateDiscoveredResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateDiscoveredResourceInput } from "../types/DisassociateDiscoveredResourceInput";
import { DisassociateDiscoveredResourceOutput } from "../types/DisassociateDiscoveredResourceOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/DisassociateDiscoveredResourceInput";
export * from "../types/DisassociateDiscoveredResourceOutput";
export * from "../types/DisassociateDiscoveredResourceExceptionsUnion";

export class DisassociateDiscoveredResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateDiscoveredResourceInput,
      OutputTypesUnion,
      DisassociateDiscoveredResourceOutput,
      MigrationHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateDiscoveredResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateDiscoveredResourceInput,
    DisassociateDiscoveredResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateDiscoveredResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateDiscoveredResourceInput,
    DisassociateDiscoveredResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateDiscoveredResourceInput,
        DisassociateDiscoveredResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
