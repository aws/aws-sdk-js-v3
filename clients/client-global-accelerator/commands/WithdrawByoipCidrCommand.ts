import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { WithdrawByoipCidrRequest, WithdrawByoipCidrResponse } from "../models/models_0";
import {
  deserializeAws_json1_1WithdrawByoipCidrCommand,
  serializeAws_json1_1WithdrawByoipCidrCommand,
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

export type WithdrawByoipCidrCommandInput = WithdrawByoipCidrRequest;
export type WithdrawByoipCidrCommandOutput = WithdrawByoipCidrResponse & __MetadataBearer;

/**
 * <p>Stops advertising an address range that is provisioned as an address pool.
 * 			You can perform this operation at most once every 10 seconds, even if you specify different address
 * 			ranges each time.</p>
 * 		       <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS because of
 * 			propagation delays.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 */
export class WithdrawByoipCidrCommand extends $Command<
  WithdrawByoipCidrCommandInput,
  WithdrawByoipCidrCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: WithdrawByoipCidrCommandInput) {
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
  ): Handler<WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "WithdrawByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: WithdrawByoipCidrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: WithdrawByoipCidrResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: WithdrawByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1WithdrawByoipCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<WithdrawByoipCidrCommandOutput> {
    return deserializeAws_json1_1WithdrawByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
