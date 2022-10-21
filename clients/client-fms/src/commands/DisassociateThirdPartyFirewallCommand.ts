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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  DisassociateThirdPartyFirewallRequest,
  DisassociateThirdPartyFirewallRequestFilterSensitiveLog,
  DisassociateThirdPartyFirewallResponse,
  DisassociateThirdPartyFirewallResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateThirdPartyFirewallCommand,
  serializeAws_json1_1DisassociateThirdPartyFirewallCommand,
} from "../protocols/Aws_json1_1";

export interface DisassociateThirdPartyFirewallCommandInput extends DisassociateThirdPartyFirewallRequest {}
export interface DisassociateThirdPartyFirewallCommandOutput
  extends DisassociateThirdPartyFirewallResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DisassociateThirdPartyFirewallCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DisassociateThirdPartyFirewallCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DisassociateThirdPartyFirewallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateThirdPartyFirewallCommandInput} for command's `input` shape.
 * @see {@link DisassociateThirdPartyFirewallCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class DisassociateThirdPartyFirewallCommand extends $Command<
  DisassociateThirdPartyFirewallCommandInput,
  DisassociateThirdPartyFirewallCommandOutput,
  FMSClientResolvedConfig
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

  constructor(readonly input: DisassociateThirdPartyFirewallCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateThirdPartyFirewallCommandInput, DisassociateThirdPartyFirewallCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateThirdPartyFirewallCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "DisassociateThirdPartyFirewallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateThirdPartyFirewallRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateThirdPartyFirewallResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateThirdPartyFirewallCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateThirdPartyFirewallCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateThirdPartyFirewallCommandOutput> {
    return deserializeAws_json1_1DisassociateThirdPartyFirewallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
