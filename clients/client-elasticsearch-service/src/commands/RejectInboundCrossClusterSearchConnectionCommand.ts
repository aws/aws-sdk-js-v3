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

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  RejectInboundCrossClusterSearchConnectionRequest,
  RejectInboundCrossClusterSearchConnectionResponse,
} from "../models/models_0";
import {
  de_RejectInboundCrossClusterSearchConnectionCommand,
  se_RejectInboundCrossClusterSearchConnectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RejectInboundCrossClusterSearchConnectionCommand}.
 */
export interface RejectInboundCrossClusterSearchConnectionCommandInput
  extends RejectInboundCrossClusterSearchConnectionRequest {}
/**
 * @public
 *
 * The output of {@link RejectInboundCrossClusterSearchConnectionCommand}.
 */
export interface RejectInboundCrossClusterSearchConnectionCommandOutput
  extends RejectInboundCrossClusterSearchConnectionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Allows the destination domain owner to reject an inbound cross-cluster search connection request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, RejectInboundCrossClusterSearchConnectionCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, RejectInboundCrossClusterSearchConnectionCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // RejectInboundCrossClusterSearchConnectionRequest
 *   CrossClusterSearchConnectionId: "STRING_VALUE", // required
 * };
 * const command = new RejectInboundCrossClusterSearchConnectionCommand(input);
 * const response = await client.send(command);
 * // { // RejectInboundCrossClusterSearchConnectionResponse
 * //   CrossClusterSearchConnection: { // InboundCrossClusterSearchConnection
 * //     SourceDomainInfo: { // DomainInformation
 * //       OwnerId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE",
 * //     },
 * //     DestinationDomainInfo: {
 * //       OwnerId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE",
 * //     },
 * //     CrossClusterSearchConnectionId: "STRING_VALUE",
 * //     ConnectionStatus: { // InboundCrossClusterSearchConnectionStatus
 * //       StatusCode: "PENDING_ACCEPTANCE" || "APPROVED" || "REJECTING" || "REJECTED" || "DELETING" || "DELETED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RejectInboundCrossClusterSearchConnectionCommandInput - {@link RejectInboundCrossClusterSearchConnectionCommandInput}
 * @returns {@link RejectInboundCrossClusterSearchConnectionCommandOutput}
 * @see {@link RejectInboundCrossClusterSearchConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectInboundCrossClusterSearchConnectionCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 */
export class RejectInboundCrossClusterSearchConnectionCommand extends $Command<
  RejectInboundCrossClusterSearchConnectionCommandInput,
  RejectInboundCrossClusterSearchConnectionCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: RejectInboundCrossClusterSearchConnectionCommandInput) {
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
    RejectInboundCrossClusterSearchConnectionCommandInput,
    RejectInboundCrossClusterSearchConnectionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        RejectInboundCrossClusterSearchConnectionCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "RejectInboundCrossClusterSearchConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElasticsearchService2015",
        operation: "RejectInboundCrossClusterSearchConnection",
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
  private serialize(
    input: RejectInboundCrossClusterSearchConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RejectInboundCrossClusterSearchConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectInboundCrossClusterSearchConnectionCommandOutput> {
    return de_RejectInboundCrossClusterSearchConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
