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
  UpdateGlobalNetworkRequest,
  UpdateGlobalNetworkRequestFilterSensitiveLog,
  UpdateGlobalNetworkResponse,
  UpdateGlobalNetworkResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1UpdateGlobalNetworkCommand,
  serializeAws_restJson1UpdateGlobalNetworkCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateGlobalNetworkCommandInput extends UpdateGlobalNetworkRequest {}
export interface UpdateGlobalNetworkCommandOutput extends UpdateGlobalNetworkResponse, __MetadataBearer {}

/**
 * <p>Updates an existing global network. To remove information for any of the parameters,
 *             specify an empty string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateGlobalNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateGlobalNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new UpdateGlobalNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGlobalNetworkCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalNetworkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class UpdateGlobalNetworkCommand extends $Command<
  UpdateGlobalNetworkCommandInput,
  UpdateGlobalNetworkCommandOutput,
  NetworkManagerClientResolvedConfig
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

  constructor(readonly input: UpdateGlobalNetworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGlobalNetworkCommandInput, UpdateGlobalNetworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGlobalNetworkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "UpdateGlobalNetworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGlobalNetworkRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateGlobalNetworkResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGlobalNetworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateGlobalNetworkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGlobalNetworkCommandOutput> {
    return deserializeAws_restJson1UpdateGlobalNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
