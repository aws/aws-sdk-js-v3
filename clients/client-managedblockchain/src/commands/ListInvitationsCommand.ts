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
import { ListInvitationsInput, ListInvitationsOutput } from "../models/models_0";
import { de_ListInvitationsCommand, se_ListInvitationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInvitationsCommand}.
 */
export interface ListInvitationsCommandInput extends ListInvitationsInput {}
/**
 * @public
 *
 * The output of {@link ListInvitationsCommand}.
 */
export interface ListInvitationsCommandOutput extends ListInvitationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all invitations for the current Amazon Web Services account.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListInvitationsCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListInvitationsCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const input = { // ListInvitationsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvitationsOutput
 * //   Invitations: [ // InvitationList
 * //     { // Invitation
 * //       InvitationId: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       ExpirationDate: new Date("TIMESTAMP"),
 * //       Status: "PENDING" || "ACCEPTED" || "ACCEPTING" || "REJECTED" || "EXPIRED",
 * //       NetworkSummary: { // NetworkSummary
 * //         Id: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Framework: "HYPERLEDGER_FABRIC" || "ETHEREUM",
 * //         FrameworkVersion: "STRING_VALUE",
 * //         Status: "CREATING" || "AVAILABLE" || "CREATE_FAILED" || "DELETING" || "DELETED",
 * //         CreationDate: new Date("TIMESTAMP"),
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInvitationsCommandInput - {@link ListInvitationsCommandInput}
 * @returns {@link ListInvitationsCommandOutput}
 * @see {@link ListInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListInvitationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The maximum number of resources of that type already exist. Ensure the resources requested
 *          are within the boundaries of the service edition and your account limits.</p>
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
export class ListInvitationsCommand extends $Command<
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
  ManagedBlockchainClientResolvedConfig
> {
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
  constructor(readonly input: ListInvitationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInvitationsCommandInput, ListInvitationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInvitationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "ListInvitationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TaigaWebService",
        operation: "ListInvitations",
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
  private serialize(input: ListInvitationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInvitationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInvitationsCommandOutput> {
    return de_ListInvitationsCommand(output, context);
  }
}
