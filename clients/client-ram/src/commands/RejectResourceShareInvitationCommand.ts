// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RejectResourceShareInvitationRequest, RejectResourceShareInvitationResponse } from "../models/models_0";
import {
  de_RejectResourceShareInvitationCommand,
  se_RejectResourceShareInvitationCommand,
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
 * The input for {@link RejectResourceShareInvitationCommand}.
 */
export interface RejectResourceShareInvitationCommandInput extends RejectResourceShareInvitationRequest {}
/**
 * @public
 *
 * The output of {@link RejectResourceShareInvitationCommand}.
 */
export interface RejectResourceShareInvitationCommandOutput
  extends RejectResourceShareInvitationResponse,
    __MetadataBearer {}

/**
 * <p>Rejects an invitation to a resource share from another Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, RejectResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, RejectResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RAMClient(config);
 * const input = { // RejectResourceShareInvitationRequest
 *   resourceShareInvitationArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RejectResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * // { // RejectResourceShareInvitationResponse
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
 * @param RejectResourceShareInvitationCommandInput - {@link RejectResourceShareInvitationCommandInput}
 * @returns {@link RejectResourceShareInvitationCommandOutput}
 * @see {@link RejectResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectResourceShareInvitationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RejectResourceShareInvitationCommand extends $Command
  .classBuilder<
    RejectResourceShareInvitationCommandInput,
    RejectResourceShareInvitationCommandOutput,
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
  .s("AmazonResourceSharing", "RejectResourceShareInvitation", {})
  .n("RAMClient", "RejectResourceShareInvitationCommand")
  .f(void 0, void 0)
  .ser(se_RejectResourceShareInvitationCommand)
  .de(de_RejectResourceShareInvitationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectResourceShareInvitationRequest;
      output: RejectResourceShareInvitationResponse;
    };
    sdk: {
      input: RejectResourceShareInvitationCommandInput;
      output: RejectResourceShareInvitationCommandOutput;
    };
  };
}
