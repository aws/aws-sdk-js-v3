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
  UpdateFirewallEncryptionConfigurationRequest,
  UpdateFirewallEncryptionConfigurationRequestFilterSensitiveLog,
  UpdateFirewallEncryptionConfigurationResponse,
  UpdateFirewallEncryptionConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  deserializeAws_json1_0UpdateFirewallEncryptionConfigurationCommand,
  serializeAws_json1_0UpdateFirewallEncryptionConfigurationCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateFirewallEncryptionConfigurationCommandInput
  extends UpdateFirewallEncryptionConfigurationRequest {}
export interface UpdateFirewallEncryptionConfigurationCommandOutput
  extends UpdateFirewallEncryptionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>A complex type that contains settings for encryption of your firewall resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallEncryptionConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallEncryptionConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallEncryptionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 */
export class UpdateFirewallEncryptionConfigurationCommand extends $Command<
  UpdateFirewallEncryptionConfigurationCommandInput,
  UpdateFirewallEncryptionConfigurationCommandOutput,
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

  constructor(readonly input: UpdateFirewallEncryptionConfigurationCommandInput) {
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
  ): Handler<UpdateFirewallEncryptionConfigurationCommandInput, UpdateFirewallEncryptionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFirewallEncryptionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "UpdateFirewallEncryptionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFirewallEncryptionConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFirewallEncryptionConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateFirewallEncryptionConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateFirewallEncryptionConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFirewallEncryptionConfigurationCommandOutput> {
    return deserializeAws_json1_0UpdateFirewallEncryptionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
