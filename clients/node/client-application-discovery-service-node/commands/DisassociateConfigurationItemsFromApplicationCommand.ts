import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateConfigurationItemsFromApplication } from "../model/operations/DisassociateConfigurationItemsFromApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateConfigurationItemsFromApplicationInput } from "../types/DisassociateConfigurationItemsFromApplicationInput";
import { DisassociateConfigurationItemsFromApplicationOutput } from "../types/DisassociateConfigurationItemsFromApplicationOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/DisassociateConfigurationItemsFromApplicationInput";
export * from "../types/DisassociateConfigurationItemsFromApplicationOutput";
export * from "../types/DisassociateConfigurationItemsFromApplicationExceptionsUnion";

export class DisassociateConfigurationItemsFromApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateConfigurationItemsFromApplicationInput,
      OutputTypesUnion,
      DisassociateConfigurationItemsFromApplicationOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateConfigurationItemsFromApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateConfigurationItemsFromApplicationInput,
    DisassociateConfigurationItemsFromApplicationOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: DisassociateConfigurationItemsFromApplicationInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateConfigurationItemsFromApplicationInput,
    DisassociateConfigurationItemsFromApplicationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateConfigurationItemsFromApplicationInput,
        DisassociateConfigurationItemsFromApplicationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
