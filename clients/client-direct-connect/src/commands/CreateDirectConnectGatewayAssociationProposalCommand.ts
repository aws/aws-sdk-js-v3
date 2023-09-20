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
  CreateDirectConnectGatewayAssociationProposalRequest,
  CreateDirectConnectGatewayAssociationProposalResult,
} from "../models/models_0";
import {
  de_CreateDirectConnectGatewayAssociationProposalCommand,
  se_CreateDirectConnectGatewayAssociationProposalCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDirectConnectGatewayAssociationProposalCommand}.
 */
export interface CreateDirectConnectGatewayAssociationProposalCommandInput
  extends CreateDirectConnectGatewayAssociationProposalRequest {}
/**
 * @public
 *
 * The output of {@link CreateDirectConnectGatewayAssociationProposalCommand}.
 */
export interface CreateDirectConnectGatewayAssociationProposalCommandOutput
  extends CreateDirectConnectGatewayAssociationProposalResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p>
 *          <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateDirectConnectGatewayAssociationProposalCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateDirectConnectGatewayAssociationProposalCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // CreateDirectConnectGatewayAssociationProposalRequest
 *   directConnectGatewayId: "STRING_VALUE", // required
 *   directConnectGatewayOwnerAccount: "STRING_VALUE", // required
 *   gatewayId: "STRING_VALUE", // required
 *   addAllowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 *     { // RouteFilterPrefix
 *       cidr: "STRING_VALUE",
 *     },
 *   ],
 *   removeAllowedPrefixesToDirectConnectGateway: [
 *     {
 *       cidr: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDirectConnectGatewayAssociationProposalCommand(input);
 * const response = await client.send(command);
 * // { // CreateDirectConnectGatewayAssociationProposalResult
 * //   directConnectGatewayAssociationProposal: { // DirectConnectGatewayAssociationProposal
 * //     proposalId: "STRING_VALUE",
 * //     directConnectGatewayId: "STRING_VALUE",
 * //     directConnectGatewayOwnerAccount: "STRING_VALUE",
 * //     proposalState: "requested" || "accepted" || "deleted",
 * //     associatedGateway: { // AssociatedGateway
 * //       id: "STRING_VALUE",
 * //       type: "virtualPrivateGateway" || "transitGateway",
 * //       ownerAccount: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //     },
 * //     existingAllowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 * //       { // RouteFilterPrefix
 * //         cidr: "STRING_VALUE",
 * //       },
 * //     ],
 * //     requestedAllowedPrefixesToDirectConnectGateway: [
 * //       {
 * //         cidr: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDirectConnectGatewayAssociationProposalCommandInput - {@link CreateDirectConnectGatewayAssociationProposalCommandInput}
 * @returns {@link CreateDirectConnectGatewayAssociationProposalCommandOutput}
 * @see {@link CreateDirectConnectGatewayAssociationProposalCommandInput} for command's `input` shape.
 * @see {@link CreateDirectConnectGatewayAssociationProposalCommandOutput} for command's `response` shape.
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
export class CreateDirectConnectGatewayAssociationProposalCommand extends $Command<
  CreateDirectConnectGatewayAssociationProposalCommandInput,
  CreateDirectConnectGatewayAssociationProposalCommandOutput,
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
  constructor(readonly input: CreateDirectConnectGatewayAssociationProposalCommandInput) {
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
    CreateDirectConnectGatewayAssociationProposalCommandInput,
    CreateDirectConnectGatewayAssociationProposalCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateDirectConnectGatewayAssociationProposalCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateDirectConnectGatewayAssociationProposalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "CreateDirectConnectGatewayAssociationProposal",
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
    input: CreateDirectConnectGatewayAssociationProposalCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateDirectConnectGatewayAssociationProposalCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDirectConnectGatewayAssociationProposalCommandOutput> {
    return de_CreateDirectConnectGatewayAssociationProposalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
