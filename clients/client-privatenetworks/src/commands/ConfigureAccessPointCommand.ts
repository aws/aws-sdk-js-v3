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
  ConfigureAccessPointRequest,
  ConfigureAccessPointRequestFilterSensitiveLog,
  ConfigureAccessPointResponse,
  ConfigureAccessPointResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import {
  deserializeAws_restJson1ConfigureAccessPointCommand,
  serializeAws_restJson1ConfigureAccessPointCommand,
} from "../protocols/Aws_restJson1";

export interface ConfigureAccessPointCommandInput extends ConfigureAccessPointRequest {}
export interface ConfigureAccessPointCommandOutput extends ConfigureAccessPointResponse, __MetadataBearer {}

/**
 * <p>Configures the specified network resource.
 *         </p>
 *         <p>
 *             Use this action to specify the geographic
 *             position of the hardware. You must provide Certified Professional Installer (CPI)
 *             credentials in the request so that we can obtain spectrum grants. For more information,
 *             see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio
 *                 units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ConfigureAccessPointCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ConfigureAccessPointCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const command = new ConfigureAccessPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfigureAccessPointCommandInput} for command's `input` shape.
 * @see {@link ConfigureAccessPointCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 */
export class ConfigureAccessPointCommand extends $Command<
  ConfigureAccessPointCommandInput,
  ConfigureAccessPointCommandOutput,
  PrivateNetworksClientResolvedConfig
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

  constructor(readonly input: ConfigureAccessPointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PrivateNetworksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfigureAccessPointCommandInput, ConfigureAccessPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfigureAccessPointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "ConfigureAccessPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfigureAccessPointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigureAccessPointResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfigureAccessPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ConfigureAccessPointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfigureAccessPointCommandOutput> {
    return deserializeAws_restJson1ConfigureAccessPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
