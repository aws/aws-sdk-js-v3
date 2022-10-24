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
  UpdateFirewallPolicyChangeProtectionRequest,
  UpdateFirewallPolicyChangeProtectionRequestFilterSensitiveLog,
  UpdateFirewallPolicyChangeProtectionResponse,
  UpdateFirewallPolicyChangeProtectionResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand,
  serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateFirewallPolicyChangeProtectionCommandInput extends UpdateFirewallPolicyChangeProtectionRequest {}
export interface UpdateFirewallPolicyChangeProtectionCommandOutput
  extends UpdateFirewallPolicyChangeProtectionResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the flag, <code>ChangeProtection</code>, which indicates whether it
 *          is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected
 *          from changes. This setting helps protect against accidentally changing a firewall that's in use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallPolicyChangeProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallPolicyChangeProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallPolicyChangeProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallPolicyChangeProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallPolicyChangeProtectionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 */
export class UpdateFirewallPolicyChangeProtectionCommand extends $Command<
  UpdateFirewallPolicyChangeProtectionCommandInput,
  UpdateFirewallPolicyChangeProtectionCommandOutput,
  NetworkFirewallClientResolvedConfig
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

  constructor(readonly input: UpdateFirewallPolicyChangeProtectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFirewallPolicyChangeProtectionCommandInput, UpdateFirewallPolicyChangeProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFirewallPolicyChangeProtectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "UpdateFirewallPolicyChangeProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFirewallPolicyChangeProtectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFirewallPolicyChangeProtectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateFirewallPolicyChangeProtectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput> {
    return deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
