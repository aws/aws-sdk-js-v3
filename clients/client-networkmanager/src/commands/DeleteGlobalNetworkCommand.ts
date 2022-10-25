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
  DeleteGlobalNetworkRequest,
  DeleteGlobalNetworkRequestFilterSensitiveLog,
  DeleteGlobalNetworkResponse,
  DeleteGlobalNetworkResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1DeleteGlobalNetworkCommand,
  serializeAws_restJson1DeleteGlobalNetworkCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteGlobalNetworkCommandInput extends DeleteGlobalNetworkRequest {}
export interface DeleteGlobalNetworkCommandOutput extends DeleteGlobalNetworkResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing global network. You must first delete all global network objects
 *             (devices, links, and sites), deregister all transit gateways, and delete any core networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteGlobalNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteGlobalNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeleteGlobalNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGlobalNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalNetworkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class DeleteGlobalNetworkCommand extends $Command<
  DeleteGlobalNetworkCommandInput,
  DeleteGlobalNetworkCommandOutput,
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

  constructor(readonly input: DeleteGlobalNetworkCommandInput) {
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
  ): Handler<DeleteGlobalNetworkCommandInput, DeleteGlobalNetworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteGlobalNetworkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "DeleteGlobalNetworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGlobalNetworkRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteGlobalNetworkResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGlobalNetworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteGlobalNetworkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGlobalNetworkCommandOutput> {
    return deserializeAws_restJson1DeleteGlobalNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
