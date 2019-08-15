import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateDiscoveredResource } from "../model/operations/AssociateDiscoveredResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateDiscoveredResourceInput } from "../types/AssociateDiscoveredResourceInput";
import { AssociateDiscoveredResourceOutput } from "../types/AssociateDiscoveredResourceOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/AssociateDiscoveredResourceInput";
export * from "../types/AssociateDiscoveredResourceOutput";
export * from "../types/AssociateDiscoveredResourceExceptionsUnion";

export class AssociateDiscoveredResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateDiscoveredResourceInput,
      OutputTypesUnion,
      AssociateDiscoveredResourceOutput,
      MigrationHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateDiscoveredResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateDiscoveredResourceInput,
    AssociateDiscoveredResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateDiscoveredResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateDiscoveredResourceInput,
    AssociateDiscoveredResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateDiscoveredResourceInput,
        AssociateDiscoveredResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
