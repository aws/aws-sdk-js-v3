import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { ProvisionByoipCidrRequest, ProvisionByoipCidrResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ProvisionByoipCidrCommand,
  serializeAws_json1_1ProvisionByoipCidrCommand,
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

export type ProvisionByoipCidrCommandInput = ProvisionByoipCidrRequest;
export type ProvisionByoipCidrCommandOutput = ProvisionByoipCidrResponse & __MetadataBearer;

/**
 * <p>Provisions an IP address range to use with your AWS resources through bring your own IP
 * 			addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned,
 * 			it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html">
 * 			AdvertiseByoipCidr</a>.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 */
export class ProvisionByoipCidrCommand extends $Command<
  ProvisionByoipCidrCommandInput,
  ProvisionByoipCidrCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ProvisionByoipCidrCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ProvisionByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvisionByoipCidrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ProvisionByoipCidrResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ProvisionByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ProvisionByoipCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvisionByoipCidrCommandOutput> {
    return deserializeAws_json1_1ProvisionByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
