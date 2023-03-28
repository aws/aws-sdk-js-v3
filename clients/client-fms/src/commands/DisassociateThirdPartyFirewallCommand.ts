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
import { DisassociateThirdPartyFirewallRequest, DisassociateThirdPartyFirewallResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateThirdPartyFirewallCommand,
  serializeAws_json1_1DisassociateThirdPartyFirewallCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DisassociateThirdPartyFirewallCommand}.
 */
export interface DisassociateThirdPartyFirewallCommandInput extends DisassociateThirdPartyFirewallRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateThirdPartyFirewallCommand}.
 */
export interface DisassociateThirdPartyFirewallCommandOutput
  extends DisassociateThirdPartyFirewallResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DisassociateThirdPartyFirewallCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DisassociateThirdPartyFirewallCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // DisassociateThirdPartyFirewallRequest
 *   ThirdPartyFirewall: "PALO_ALTO_NETWORKS_CLOUD_NGFW" || "FORTIGATE_CLOUD_NATIVE_FIREWALL", // required
 * };
 * const command = new DisassociateThirdPartyFirewallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DisassociateThirdPartyFirewallCommandInput - {@link DisassociateThirdPartyFirewallCommandInput}
 * @returns {@link DisassociateThirdPartyFirewallCommandOutput}
 * @see {@link DisassociateThirdPartyFirewallCommandInput} for command's `input` shape.
 * @see {@link DisassociateThirdPartyFirewallCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DisassociateThirdPartyFirewallCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateThirdPartyFirewallCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateThirdPartyFirewallCommandOutput> {
    return deserializeAws_json1_1DisassociateThirdPartyFirewallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
