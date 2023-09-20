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
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { GetProposalInput, GetProposalOutput } from "../models/models_0";
import { de_GetProposalCommand, se_GetProposalCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProposalCommand}.
 */
export interface GetProposalCommandInput extends GetProposalInput {}
/**
 * @public
 *
 * The output of {@link GetProposalCommand}.
 */
export interface GetProposalCommandOutput extends GetProposalOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns detailed information about a proposal.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const input = { // GetProposalInput
 *   NetworkId: "STRING_VALUE", // required
 *   ProposalId: "STRING_VALUE", // required
 * };
 * const command = new GetProposalCommand(input);
 * const response = await client.send(command);
 * // { // GetProposalOutput
 * //   Proposal: { // Proposal
 * //     ProposalId: "STRING_VALUE",
 * //     NetworkId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Actions: { // ProposalActions
 * //       Invitations: [ // InviteActionList
 * //         { // InviteAction
 * //           Principal: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Removals: [ // RemoveActionList
 * //         { // RemoveAction
 * //           MemberId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     ProposedByMemberId: "STRING_VALUE",
 * //     ProposedByMemberName: "STRING_VALUE",
 * //     Status: "IN_PROGRESS" || "APPROVED" || "REJECTED" || "EXPIRED" || "ACTION_FAILED",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     ExpirationDate: new Date("TIMESTAMP"),
 * //     YesVoteCount: Number("int"),
 * //     NoVoteCount: Number("int"),
 * //     OutstandingVoteCount: Number("int"),
 * //     Tags: { // OutputTagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Arn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProposalCommandInput - {@link GetProposalCommandInput}
 * @returns {@link GetProposalCommandOutput}
 * @see {@link GetProposalCommandInput} for command's `input` shape.
 * @see {@link GetProposalCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource doesn't exist. It may have been deleted or referenced incorrectly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation couldn't be performed because a service is
 *          throttling requests. The most common source of throttling errors is
 *          creating resources that exceed your service limit for this resource type.
 *          Request a limit increase or delete unused resources if possible.</p>
 *
 * @throws {@link ManagedBlockchainServiceException}
 * <p>Base exception class for all service exceptions from ManagedBlockchain service.</p>
 *
 */
export class GetProposalCommand extends $Command<
  GetProposalCommandInput,
  GetProposalCommandOutput,
  ManagedBlockchainClientResolvedConfig
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
  constructor(readonly input: GetProposalCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProposalCommandInput, GetProposalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetProposalCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "GetProposalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TaigaWebService",
        operation: "GetProposal",
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
  private serialize(input: GetProposalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetProposalCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProposalCommandOutput> {
    return de_GetProposalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
