// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import {
  ProvisionByoipCidrRequest,
  ProvisionByoipCidrRequestFilterSensitiveLog,
  ProvisionByoipCidrResponse,
  ProvisionByoipCidrResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ProvisionByoipCidrCommand,
  serializeAws_json1_1ProvisionByoipCidrCommand,
} from "../protocols/Aws_json1_1";

export interface ProvisionByoipCidrCommandInput extends ProvisionByoipCidrRequest {}
export interface ProvisionByoipCidrCommandOutput extends ProvisionByoipCidrResponse, __MetadataBearer {}

/**
 * <p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP
 * 			addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned,
 * 			it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html">
 * 			AdvertiseByoipCidr</a>.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own
 * 			IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ProvisionByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ProvisionByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ProvisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class ProvisionByoipCidrCommand extends $Command<
  ProvisionByoipCidrCommandInput,
  ProvisionByoipCidrCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ProvisionByoipCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ProvisionByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvisionByoipCidrRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ProvisionByoipCidrResponseFilterSensitiveLog,
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
