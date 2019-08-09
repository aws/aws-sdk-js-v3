import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateCompanyNetworkConfiguration } from "../model/UpdateCompanyNetworkConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCompanyNetworkConfigurationInput } from "../types/UpdateCompanyNetworkConfigurationInput";
import { UpdateCompanyNetworkConfigurationOutput } from "../types/UpdateCompanyNetworkConfigurationOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/UpdateCompanyNetworkConfigurationInput";
export * from "../types/UpdateCompanyNetworkConfigurationOutput";
export * from "../types/UpdateCompanyNetworkConfigurationExceptionsUnion";

export class UpdateCompanyNetworkConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCompanyNetworkConfigurationInput,
      OutputTypesUnion,
      UpdateCompanyNetworkConfigurationOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateCompanyNetworkConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCompanyNetworkConfigurationInput,
    UpdateCompanyNetworkConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateCompanyNetworkConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCompanyNetworkConfigurationInput,
    UpdateCompanyNetworkConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateCompanyNetworkConfigurationInput,
        UpdateCompanyNetworkConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
