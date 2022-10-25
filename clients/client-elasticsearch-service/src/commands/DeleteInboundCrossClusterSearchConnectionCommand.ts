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
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  DeleteInboundCrossClusterSearchConnectionRequest,
  DeleteInboundCrossClusterSearchConnectionRequestFilterSensitiveLog,
  DeleteInboundCrossClusterSearchConnectionResponse,
  DeleteInboundCrossClusterSearchConnectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand,
  serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteInboundCrossClusterSearchConnectionCommandInput
  extends DeleteInboundCrossClusterSearchConnectionRequest {}
export interface DeleteInboundCrossClusterSearchConnectionCommandOutput
  extends DeleteInboundCrossClusterSearchConnectionResponse,
    __MetadataBearer {}

/**
 * <p>Allows the destination domain owner to delete an existing inbound cross-cluster search connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteInboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteInboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeleteInboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteInboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class DeleteInboundCrossClusterSearchConnectionCommand extends $Command<
  DeleteInboundCrossClusterSearchConnectionCommandInput,
  DeleteInboundCrossClusterSearchConnectionCommandOutput,
  ElasticsearchServiceClientResolvedConfig
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

  constructor(readonly input: DeleteInboundCrossClusterSearchConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteInboundCrossClusterSearchConnectionCommandInput,
    DeleteInboundCrossClusterSearchConnectionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteInboundCrossClusterSearchConnectionCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DeleteInboundCrossClusterSearchConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInboundCrossClusterSearchConnectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteInboundCrossClusterSearchConnectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteInboundCrossClusterSearchConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteInboundCrossClusterSearchConnectionCommandOutput> {
    return deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
