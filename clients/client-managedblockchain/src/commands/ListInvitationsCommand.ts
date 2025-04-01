// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
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
export type { __MetadataBearer };
export { $Command };
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
 *
 * @public
 */
export class ListInvitationsCommand extends $Command
  .classBuilder<
    ListInvitationsCommandInput,
    ListInvitationsCommandOutput,
    ManagedBlockchainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ManagedBlockchainClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TaigaWebService", "ListInvitations", {})
  .n("ManagedBlockchainClient", "ListInvitationsCommand")
  .f(void 0, void 0)
  .ser(se_ListInvitationsCommand)
  .de(de_ListInvitationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvitationsInput;
      output: ListInvitationsOutput;
    };
    sdk: {
      input: ListInvitationsCommandInput;
      output: ListInvitationsCommandOutput;
    };
  };
}
