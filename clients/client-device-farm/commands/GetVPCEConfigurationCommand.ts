import {
  DeviceFarmClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DeviceFarmClient";
import {
  GetVPCEConfigurationRequest,
  GetVPCEConfigurationResult
} from "../models/index";
import {
  deserializeAws_json1_1GetVPCEConfigurationCommand,
  serializeAws_json1_1GetVPCEConfigurationCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type GetVPCEConfigurationCommandInput = GetVPCEConfigurationRequest;
export type GetVPCEConfigurationCommandOutput = GetVPCEConfigurationResult &
  __MetadataBearer;

export class GetVPCEConfigurationCommand extends $Command<
  GetVPCEConfigurationCommandInput,
  GetVPCEConfigurationCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVPCEConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetVPCEConfigurationCommandInput,
    GetVPCEConfigurationCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetVPCEConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetVPCEConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetVPCEConfigurationCommandOutput> {
    return deserializeAws_json1_1GetVPCEConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
