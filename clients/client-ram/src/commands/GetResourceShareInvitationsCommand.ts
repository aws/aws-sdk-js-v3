// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourceShareInvitationsRequest, GetResourceShareInvitationsResponse } from "../models/models_0";
import {
  de_GetResourceShareInvitationsCommand,
  se_GetResourceShareInvitationsCommand,
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
 * The input for {@link GetResourceShareInvitationsCommand}.
 */
export interface GetResourceShareInvitationsCommandInput extends GetResourceShareInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceShareInvitationsCommand}.
 */
export interface GetResourceShareInvitationsCommandOutput
  extends GetResourceShareInvitationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves details about invitations that you have received for resource shares.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareInvitationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareInvitationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // GetResourceShareInvitationsRequest
 *   resourceShareInvitationArns: [ // ResourceShareInvitationArnList
 *     "STRING_VALUE",
 *   ],
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetResourceShareInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceShareInvitationsResponse
 * //   resourceShareInvitations: [ // ResourceShareInvitationList
 * //     { // ResourceShareInvitation
 * //       resourceShareInvitationArn: "STRING_VALUE",
 * //       resourceShareName: "STRING_VALUE",
 * //       resourceShareArn: "STRING_VALUE",
 * //       senderAccountId: "STRING_VALUE",
 * //       receiverAccountId: "STRING_VALUE",
 * //       invitationTimestamp: new Date("TIMESTAMP"),
 * //       status: "PENDING" || "ACCEPTED" || "REJECTED" || "EXPIRED",
 * //       resourceShareAssociations: [ // ResourceShareAssociationList
 * //         { // ResourceShareAssociation
 * //           resourceShareArn: "STRING_VALUE",
 * //           resourceShareName: "STRING_VALUE",
 * //           associatedEntity: "STRING_VALUE",
 * //           associationType: "PRINCIPAL" || "RESOURCE",
 * //           status: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED",
 * //           statusMessage: "STRING_VALUE",
 * //           creationTime: new Date("TIMESTAMP"),
 * //           lastUpdatedTime: new Date("TIMESTAMP"),
 * //           external: true || false,
 * //         },
 * //       ],
 * //       receiverArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceShareInvitationsCommandInput - {@link GetResourceShareInvitationsCommandInput}
 * @returns {@link GetResourceShareInvitationsCommandOutput}
 * @see {@link GetResourceShareInvitationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareInvitationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>The operation failed because the specified value for <code>MaxResults</code> isn't
 *             valid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link ResourceShareInvitationArnNotFoundException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> for an invitation was not
 *             found.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class GetResourceShareInvitationsCommand extends $Command
  .classBuilder<
    GetResourceShareInvitationsCommandInput,
    GetResourceShareInvitationsCommandOutput,
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
  .s("AmazonResourceSharing", "GetResourceShareInvitations", {})
  .n("RAMClient", "GetResourceShareInvitationsCommand")
  .f(void 0, void 0)
  .ser(se_GetResourceShareInvitationsCommand)
  .de(de_GetResourceShareInvitationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceShareInvitationsRequest;
      output: GetResourceShareInvitationsResponse;
    };
    sdk: {
      input: GetResourceShareInvitationsCommandInput;
      output: GetResourceShareInvitationsCommandOutput;
    };
  };
}
