import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateGatewayInformationInput, UpdateGatewayInformationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateGatewayInformationCommand,
  serializeAws_json1_1UpdateGatewayInformationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type UpdateGatewayInformationCommandInput = UpdateGatewayInformationInput;
export type UpdateGatewayInformationCommandOutput = UpdateGatewayInformationOutput & __MetadataBearer;

/**
 * <p>Updates a gateway's metadata, which includes the gateway's name and time zone.
 *          To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 *
 *          <note>
 *             <p>For gateways activated after September 2, 2015, the gateway's ARN contains the
 *             gateway ID rather than the gateway name. However, changing the name of the gateway has
 *             no effect on the gateway's ARN.</p>
 *          </note>
 */
export class UpdateGatewayInformationCommand extends $Command<
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGatewayInformationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGatewayInformationCommandInput, UpdateGatewayInformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateGatewayInformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGatewayInformationInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGatewayInformationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGatewayInformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateGatewayInformationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGatewayInformationCommandOutput> {
    return deserializeAws_json1_1UpdateGatewayInformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
