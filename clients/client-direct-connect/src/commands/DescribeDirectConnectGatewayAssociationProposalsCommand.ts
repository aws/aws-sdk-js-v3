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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  DescribeDirectConnectGatewayAssociationProposalsRequest,
  DescribeDirectConnectGatewayAssociationProposalsResult,
} from "../models/models_0";
import {
  de_DescribeDirectConnectGatewayAssociationProposalsCommand,
  se_DescribeDirectConnectGatewayAssociationProposalsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectConnectGatewayAssociationProposalsCommand}.
 */
export interface DescribeDirectConnectGatewayAssociationProposalsCommandInput
  extends DescribeDirectConnectGatewayAssociationProposalsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectConnectGatewayAssociationProposalsCommand}.
 */
export interface DescribeDirectConnectGatewayAssociationProposalsCommandOutput
  extends DescribeDirectConnectGatewayAssociationProposalsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAssociationProposalsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAssociationProposalsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeDirectConnectGatewayAssociationProposalsRequest
 *   directConnectGatewayId: "STRING_VALUE",
 *   proposalId: "STRING_VALUE",
 *   associatedGatewayId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDirectConnectGatewayAssociationProposalsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectConnectGatewayAssociationProposalsResult
 * //   directConnectGatewayAssociationProposals: [ // DirectConnectGatewayAssociationProposalList
 * //     { // DirectConnectGatewayAssociationProposal
 * //       proposalId: "STRING_VALUE",
 * //       directConnectGatewayId: "STRING_VALUE",
 * //       directConnectGatewayOwnerAccount: "STRING_VALUE",
 * //       proposalState: "requested" || "accepted" || "deleted",
 * //       associatedGateway: { // AssociatedGateway
 * //         id: "STRING_VALUE",
 * //         type: "virtualPrivateGateway" || "transitGateway",
 * //         ownerAccount: "STRING_VALUE",
 * //         region: "STRING_VALUE",
 * //       },
 * //       existingAllowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 * //         { // RouteFilterPrefix
 * //           cidr: "STRING_VALUE",
 * //         },
 * //       ],
 * //       requestedAllowedPrefixesToDirectConnectGateway: [
 * //         {
 * //           cidr: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectConnectGatewayAssociationProposalsCommandInput - {@link DescribeDirectConnectGatewayAssociationProposalsCommandInput}
 * @returns {@link DescribeDirectConnectGatewayAssociationProposalsCommandOutput}
 * @see {@link DescribeDirectConnectGatewayAssociationProposalsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAssociationProposalsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 */
export class DescribeDirectConnectGatewayAssociationProposalsCommand extends $Command<
  DescribeDirectConnectGatewayAssociationProposalsCommandInput,
  DescribeDirectConnectGatewayAssociationProposalsCommandOutput,
  DirectConnectClientResolvedConfig
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
  constructor(readonly input: DescribeDirectConnectGatewayAssociationProposalsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    DescribeDirectConnectGatewayAssociationProposalsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeDirectConnectGatewayAssociationProposalsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeDirectConnectGatewayAssociationProposalsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "DescribeDirectConnectGatewayAssociationProposals",
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
    input: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDirectConnectGatewayAssociationProposalsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput> {
    return de_DescribeDirectConnectGatewayAssociationProposalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
