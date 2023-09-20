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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AcceptInboundConnectionRequest, AcceptInboundConnectionResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_AcceptInboundConnectionCommand, se_AcceptInboundConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcceptInboundConnectionCommand}.
 */
export interface AcceptInboundConnectionCommandInput extends AcceptInboundConnectionRequest {}
/**
 * @public
 *
 * The output of {@link AcceptInboundConnectionCommand}.
 */
export interface AcceptInboundConnectionCommandOutput extends AcceptInboundConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Allows the destination Amazon OpenSearch Service domain owner to accept an inbound
 *    cross-cluster search connection request. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
 *     for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AcceptInboundConnectionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AcceptInboundConnectionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // AcceptInboundConnectionRequest
 *   ConnectionId: "STRING_VALUE", // required
 * };
 * const command = new AcceptInboundConnectionCommand(input);
 * const response = await client.send(command);
 * // { // AcceptInboundConnectionResponse
 * //   Connection: { // InboundConnection
 * //     LocalDomainInfo: { // DomainInformationContainer
 * //       AWSDomainInformation: { // AWSDomainInformation
 * //         OwnerId: "STRING_VALUE",
 * //         DomainName: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //     },
 * //     RemoteDomainInfo: {
 * //       AWSDomainInformation: {
 * //         OwnerId: "STRING_VALUE",
 * //         DomainName: "STRING_VALUE", // required
 * //         Region: "STRING_VALUE",
 * //       },
 * //     },
 * //     ConnectionId: "STRING_VALUE",
 * //     ConnectionStatus: { // InboundConnectionStatus
 * //       StatusCode: "PENDING_ACCEPTANCE" || "APPROVED" || "PROVISIONING" || "ACTIVE" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptInboundConnectionCommandInput - {@link AcceptInboundConnectionCommandInput}
 * @returns {@link AcceptInboundConnectionCommandOutput}
 * @see {@link AcceptInboundConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptInboundConnectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class AcceptInboundConnectionCommand extends $Command<
  AcceptInboundConnectionCommandInput,
  AcceptInboundConnectionCommandOutput,
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
  constructor(readonly input: AcceptInboundConnectionCommandInput) {
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
  ): Handler<AcceptInboundConnectionCommandInput, AcceptInboundConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptInboundConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "AcceptInboundConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonOpenSearchService",
        operation: "AcceptInboundConnection",
      },
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
  private serialize(input: AcceptInboundConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcceptInboundConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptInboundConnectionCommandOutput> {
    return de_AcceptInboundConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
