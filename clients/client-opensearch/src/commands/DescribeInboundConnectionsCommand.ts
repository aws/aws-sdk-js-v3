// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DescribeInboundConnectionsRequest, DescribeInboundConnectionsResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_DescribeInboundConnectionsCommand, se_DescribeInboundConnectionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInboundConnectionsCommand}.
 */
export interface DescribeInboundConnectionsCommandInput extends DescribeInboundConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInboundConnectionsCommand}.
 */
export interface DescribeInboundConnectionsCommandOutput extends DescribeInboundConnectionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the inbound cross-cluster search connections for a destination (remote) Amazon
 *    OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
 *     for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeInboundConnectionsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeInboundConnectionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeInboundConnectionsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInboundConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInboundConnectionsResponse
 * //   Connections: [ // InboundConnections
 * //     { // InboundConnection
 * //       LocalDomainInfo: { // DomainInformationContainer
 * //         AWSDomainInformation: { // AWSDomainInformation
 * //           OwnerId: "STRING_VALUE",
 * //           DomainName: "STRING_VALUE", // required
 * //           Region: "STRING_VALUE",
 * //         },
 * //       },
 * //       RemoteDomainInfo: {
 * //         AWSDomainInformation: {
 * //           OwnerId: "STRING_VALUE",
 * //           DomainName: "STRING_VALUE", // required
 * //           Region: "STRING_VALUE",
 * //         },
 * //       },
 * //       ConnectionId: "STRING_VALUE",
 * //       ConnectionStatus: { // InboundConnectionStatus
 * //         StatusCode: "PENDING_ACCEPTANCE" || "APPROVED" || "PROVISIONING" || "ACTIVE" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInboundConnectionsCommandInput - {@link DescribeInboundConnectionsCommandInput}
 * @returns {@link DescribeInboundConnectionsCommandOutput}
 * @see {@link DescribeInboundConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundConnectionsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Request processing failed because you provided an invalid pagination token.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class DescribeInboundConnectionsCommand extends $Command<
  DescribeInboundConnectionsCommandInput,
  DescribeInboundConnectionsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeInboundConnectionsCommandInput) {
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
  ): Handler<DescribeInboundConnectionsCommandInput, DescribeInboundConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInboundConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DescribeInboundConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeInboundConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInboundConnectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInboundConnectionsCommandOutput> {
    return de_DescribeInboundConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
