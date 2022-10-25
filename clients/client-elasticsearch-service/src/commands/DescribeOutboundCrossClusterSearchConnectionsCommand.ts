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
  DescribeOutboundCrossClusterSearchConnectionsRequest,
  DescribeOutboundCrossClusterSearchConnectionsRequestFilterSensitiveLog,
  DescribeOutboundCrossClusterSearchConnectionsResponse,
  DescribeOutboundCrossClusterSearchConnectionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand,
  serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeOutboundCrossClusterSearchConnectionsCommandInput
  extends DescribeOutboundCrossClusterSearchConnectionsRequest {}
export interface DescribeOutboundCrossClusterSearchConnectionsCommandOutput
  extends DescribeOutboundCrossClusterSearchConnectionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the outbound cross-cluster search connections for a source domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeOutboundCrossClusterSearchConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class DescribeOutboundCrossClusterSearchConnectionsCommand extends $Command<
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
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

  constructor(readonly input: DescribeOutboundCrossClusterSearchConnectionsCommandInput) {
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
    DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    DescribeOutboundCrossClusterSearchConnectionsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeOutboundCrossClusterSearchConnectionsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "DescribeOutboundCrossClusterSearchConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOutboundCrossClusterSearchConnectionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeOutboundCrossClusterSearchConnectionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> {
    return deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
