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

import { CreateOutboundConnectionRequest, CreateOutboundConnectionResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_CreateOutboundConnectionCommand, se_CreateOutboundConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateOutboundConnectionCommand}.
 */
export interface CreateOutboundConnectionCommandInput extends CreateOutboundConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateOutboundConnectionCommand}.
 */
export interface CreateOutboundConnectionCommandOutput extends CreateOutboundConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new cross-cluster search connection from a source Amazon OpenSearch Service domain
 *    to a destination domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cross-cluster-search.html">Cross-cluster search
 *     for Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CreateOutboundConnectionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CreateOutboundConnectionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // CreateOutboundConnectionRequest
 *   LocalDomainInfo: { // DomainInformationContainer
 *     AWSDomainInformation: { // AWSDomainInformation
 *       OwnerId: "STRING_VALUE",
 *       DomainName: "STRING_VALUE", // required
 *       Region: "STRING_VALUE",
 *     },
 *   },
 *   RemoteDomainInfo: {
 *     AWSDomainInformation: {
 *       OwnerId: "STRING_VALUE",
 *       DomainName: "STRING_VALUE", // required
 *       Region: "STRING_VALUE",
 *     },
 *   },
 *   ConnectionAlias: "STRING_VALUE", // required
 *   ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 *   ConnectionProperties: { // ConnectionProperties
 *     Endpoint: "STRING_VALUE",
 *     CrossClusterSearch: { // CrossClusterSearchConnectionProperties
 *       SkipUnavailable: "ENABLED" || "DISABLED",
 *     },
 *   },
 * };
 * const command = new CreateOutboundConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateOutboundConnectionResponse
 * //   LocalDomainInfo: { // DomainInformationContainer
 * //     AWSDomainInformation: { // AWSDomainInformation
 * //       OwnerId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE",
 * //     },
 * //   },
 * //   RemoteDomainInfo: {
 * //     AWSDomainInformation: {
 * //       OwnerId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE",
 * //     },
 * //   },
 * //   ConnectionAlias: "STRING_VALUE",
 * //   ConnectionStatus: { // OutboundConnectionStatus
 * //     StatusCode: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_ACCEPTANCE" || "APPROVED" || "PROVISIONING" || "ACTIVE" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   ConnectionId: "STRING_VALUE",
 * //   ConnectionMode: "DIRECT" || "VPC_ENDPOINT",
 * //   ConnectionProperties: { // ConnectionProperties
 * //     Endpoint: "STRING_VALUE",
 * //     CrossClusterSearch: { // CrossClusterSearchConnectionProperties
 * //       SkipUnavailable: "ENABLED" || "DISABLED",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateOutboundConnectionCommandInput - {@link CreateOutboundConnectionCommandInput}
 * @returns {@link CreateOutboundConnectionCommandOutput}
 * @see {@link CreateOutboundConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateOutboundConnectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class CreateOutboundConnectionCommand extends $Command<
  CreateOutboundConnectionCommandInput,
  CreateOutboundConnectionCommandOutput,
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
  constructor(readonly input: CreateOutboundConnectionCommandInput) {
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
  ): Handler<CreateOutboundConnectionCommandInput, CreateOutboundConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOutboundConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "CreateOutboundConnectionCommand";
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
  private serialize(input: CreateOutboundConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateOutboundConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOutboundConnectionCommandOutput> {
    return de_CreateOutboundConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
