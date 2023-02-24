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
  RejectInboundConnectionRequest,
  RejectInboundConnectionRequestFilterSensitiveLog,
  RejectInboundConnectionResponse,
  RejectInboundConnectionResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1RejectInboundConnectionCommand,
  serializeAws_restJson1RejectInboundConnectionCommand,
} from "../protocols/Aws_restJson1";

export interface RejectInboundConnectionCommandInput extends RejectInboundConnectionRequest {}
export interface RejectInboundConnectionCommandOutput extends RejectInboundConnectionResponse, __MetadataBearer {}

/**
 * <p>Allows the remote Amazon OpenSearch Service domain owner to reject an inbound cross-cluster
 *    connection request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, RejectInboundConnectionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, RejectInboundConnectionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new RejectInboundConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectInboundConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectInboundConnectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 */
export class RejectInboundConnectionCommand extends $Command<
  RejectInboundConnectionCommandInput,
  RejectInboundConnectionCommandOutput,
  OpenSearchClientResolvedConfig
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

  constructor(readonly input: RejectInboundConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectInboundConnectionCommandInput, RejectInboundConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectInboundConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "RejectInboundConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectInboundConnectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RejectInboundConnectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectInboundConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RejectInboundConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RejectInboundConnectionCommandOutput> {
    return deserializeAws_restJson1RejectInboundConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
