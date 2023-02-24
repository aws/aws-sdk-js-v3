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
  DeleteNetworkSiteRequest,
  DeleteNetworkSiteRequestFilterSensitiveLog,
  DeleteNetworkSiteResponse,
  DeleteNetworkSiteResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import {
  deserializeAws_restJson1DeleteNetworkSiteCommand,
  serializeAws_restJson1DeleteNetworkSiteCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteNetworkSiteCommandInput extends DeleteNetworkSiteRequest {}
export interface DeleteNetworkSiteCommandOutput extends DeleteNetworkSiteResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified network site. Return the hardware after you delete the network
 *             site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware
 *                 returns</a> in the <i>Amazon Web Services Private 5G User
 *             Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, DeleteNetworkSiteCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, DeleteNetworkSiteCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const command = new DeleteNetworkSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkSiteCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkSiteCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 */
export class DeleteNetworkSiteCommand extends $Command<
  DeleteNetworkSiteCommandInput,
  DeleteNetworkSiteCommandOutput,
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

  constructor(readonly input: DeleteNetworkSiteCommandInput) {
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
  ): Handler<DeleteNetworkSiteCommandInput, DeleteNetworkSiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNetworkSiteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "DeleteNetworkSiteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNetworkSiteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteNetworkSiteResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNetworkSiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteNetworkSiteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNetworkSiteCommandOutput> {
    return deserializeAws_restJson1DeleteNetworkSiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
