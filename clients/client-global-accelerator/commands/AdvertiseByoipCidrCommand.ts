import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { AdvertiseByoipCidrRequest, AdvertiseByoipCidrResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdvertiseByoipCidrCommand,
  serializeAws_json1_1AdvertiseByoipCidrCommand,
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

export type AdvertiseByoipCidrCommandInput = AdvertiseByoipCidrRequest;
export type AdvertiseByoipCidrCommandOutput = AdvertiseByoipCidrResponse & __MetadataBearer;

/**
 * <p>Advertises an IPv4 address range that is provisioned for use with your AWS resources
 * 			through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to
 * 			the specified addresses starts routing to AWS because of propagation delays. </p>
 * 		       <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">
 * 			WithdrawByoipCidr</a>.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 */
export class AdvertiseByoipCidrCommand extends $Command<
  AdvertiseByoipCidrCommandInput,
  AdvertiseByoipCidrCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdvertiseByoipCidrCommandInput) {
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
  ): Handler<AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "AdvertiseByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdvertiseByoipCidrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdvertiseByoipCidrResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdvertiseByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdvertiseByoipCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdvertiseByoipCidrCommandOutput> {
    return deserializeAws_json1_1AdvertiseByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
