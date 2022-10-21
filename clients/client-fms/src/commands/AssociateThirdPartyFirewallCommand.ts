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
  AssociateThirdPartyFirewallRequest,
  AssociateThirdPartyFirewallRequestFilterSensitiveLog,
  AssociateThirdPartyFirewallResponse,
  AssociateThirdPartyFirewallResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateThirdPartyFirewallCommand,
  serializeAws_json1_1AssociateThirdPartyFirewallCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateThirdPartyFirewallCommandInput extends AssociateThirdPartyFirewallRequest {}
export interface AssociateThirdPartyFirewallCommandOutput
  extends AssociateThirdPartyFirewallResponse,
    __MetadataBearer {}

/**
 * <p>Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, AssociateThirdPartyFirewallCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, AssociateThirdPartyFirewallCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new AssociateThirdPartyFirewallCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateThirdPartyFirewallCommandInput} for command's `input` shape.
 * @see {@link AssociateThirdPartyFirewallCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class AssociateThirdPartyFirewallCommand extends $Command<
  AssociateThirdPartyFirewallCommandInput,
  AssociateThirdPartyFirewallCommandOutput,
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

  constructor(readonly input: AssociateThirdPartyFirewallCommandInput) {
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
  ): Handler<AssociateThirdPartyFirewallCommandInput, AssociateThirdPartyFirewallCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateThirdPartyFirewallCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "AssociateThirdPartyFirewallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateThirdPartyFirewallRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateThirdPartyFirewallResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateThirdPartyFirewallCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateThirdPartyFirewallCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateThirdPartyFirewallCommandOutput> {
    return deserializeAws_json1_1AssociateThirdPartyFirewallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
