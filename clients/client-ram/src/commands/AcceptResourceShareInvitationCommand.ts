// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptResourceShareInvitationRequest, AcceptResourceShareInvitationResponse } from "../models/models_0";
import {
  de_AcceptResourceShareInvitationCommand,
  se_AcceptResourceShareInvitationCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptResourceShareInvitationCommand}.
 */
export interface AcceptResourceShareInvitationCommandInput extends AcceptResourceShareInvitationRequest {}
/**
 * @public
 *
 * The output of {@link AcceptResourceShareInvitationCommand}.
 */
export interface AcceptResourceShareInvitationCommandOutput
  extends AcceptResourceShareInvitationResponse,
    __MetadataBearer {}

/**
 * <p>Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the
 *             invitation, the resources included in the resource share are available to interact with in the
 *             relevant Amazon Web Services Management Consoles and tools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AcceptResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AcceptResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // AcceptResourceShareInvitationRequest
 *   resourceShareInvitationArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AcceptResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * // { // AcceptResourceShareInvitationResponse
 * //   resourceShareInvitation: { // ResourceShareInvitation
 * //     resourceShareInvitationArn: "STRING_VALUE",
 * //     resourceShareName: "STRING_VALUE",
 * //     resourceShareArn: "STRING_VALUE",
 * //     senderAccountId: "STRING_VALUE",
 * //     receiverAccountId: "STRING_VALUE",
 * //     invitationTimestamp: new Date("TIMESTAMP"),
 * //     status: "PENDING" || "ACCEPTED" || "REJECTED" || "EXPIRED",
 * //     resourceShareAssociations: [ // ResourceShareAssociationList
 * //       { // ResourceShareAssociation
 * //         resourceShareArn: "STRING_VALUE",
 * //         resourceShareName: "STRING_VALUE",
 * //         associatedEntity: "STRING_VALUE",
 * //         associationType: "PRINCIPAL" || "RESOURCE",
 * //         status: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED",
 * //         statusMessage: "STRING_VALUE",
 * //         creationTime: new Date("TIMESTAMP"),
 * //         lastUpdatedTime: new Date("TIMESTAMP"),
 * //         external: true || false,
 * //       },
 * //     ],
 * //     receiverArn: "STRING_VALUE",
 * //   },
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AcceptResourceShareInvitationCommandInput - {@link AcceptResourceShareInvitationCommandInput}
 * @returns {@link AcceptResourceShareInvitationCommandOutput}
 * @see {@link AcceptResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptResourceShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ResourceShareInvitationAlreadyAcceptedException} (client fault)
 *  <p>The operation failed because the specified invitation was already accepted.</p>
 *
 * @throws {@link ResourceShareInvitationAlreadyRejectedException} (client fault)
 *  <p>The operation failed because the specified invitation was already rejected.</p>
 *
 * @throws {@link ResourceShareInvitationArnNotFoundException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> for an invitation was not
 *             found.</p>
 *
 * @throws {@link ResourceShareInvitationExpiredException} (client fault)
 *  <p>The operation failed because the specified invitation is past its expiration date and
 *             time.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class AcceptResourceShareInvitationCommand extends $Command
  .classBuilder<
    AcceptResourceShareInvitationCommandInput,
    AcceptResourceShareInvitationCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "AcceptResourceShareInvitation", {})
  .n("RAMClient", "AcceptResourceShareInvitationCommand")
  .f(void 0, void 0)
  .ser(se_AcceptResourceShareInvitationCommand)
  .de(de_AcceptResourceShareInvitationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptResourceShareInvitationRequest;
      output: AcceptResourceShareInvitationResponse;
    };
    sdk: {
      input: AcceptResourceShareInvitationCommandInput;
      output: AcceptResourceShareInvitationCommandOutput;
    };
  };
}
