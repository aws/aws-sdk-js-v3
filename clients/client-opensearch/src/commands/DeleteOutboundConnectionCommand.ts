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

import { DeleteOutboundConnectionRequest, DeleteOutboundConnectionResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_DeleteOutboundConnectionCommand, se_DeleteOutboundConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteOutboundConnectionCommand}.
 */
export interface DeleteOutboundConnectionCommandInput extends DeleteOutboundConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOutboundConnectionCommand}.
 */
export interface DeleteOutboundConnectionCommandOutput extends DeleteOutboundConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Allows the source Amazon OpenSearch Service domain owner to delete an existing outbound
 *    cross-cluster search connection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
 *     for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DeleteOutboundConnectionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DeleteOutboundConnectionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DeleteOutboundConnectionRequest
 *   ConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOutboundConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteOutboundConnectionResponse
 * //   Connection: { // OutboundConnection
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
 * //     ConnectionAlias: "STRING_VALUE",
 * //     ConnectionStatus: { // OutboundConnectionStatus
 * //       StatusCode: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_ACCEPTANCE" || "APPROVED" || "PROVISIONING" || "ACTIVE" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 * //     ConnectionProperties: { // ConnectionProperties
 * //       Endpoint: "STRING_VALUE",
 * //       CrossClusterSearch: { // CrossClusterSearchConnectionProperties
 * //         SkipUnavailable: "ENABLED" || "DISABLED",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteOutboundConnectionCommandInput - {@link DeleteOutboundConnectionCommandInput}
 * @returns {@link DeleteOutboundConnectionCommandOutput}
 * @see {@link DeleteOutboundConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteOutboundConnectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class DeleteOutboundConnectionCommand extends $Command<
  DeleteOutboundConnectionCommandInput,
  DeleteOutboundConnectionCommandOutput,
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
  constructor(readonly input: DeleteOutboundConnectionCommandInput) {
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
  ): Handler<DeleteOutboundConnectionCommandInput, DeleteOutboundConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteOutboundConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DeleteOutboundConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonOpenSearchService",
        operation: "DeleteOutboundConnection",
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
  private serialize(input: DeleteOutboundConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteOutboundConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteOutboundConnectionCommandOutput> {
    return de_DeleteOutboundConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
