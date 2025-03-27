// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPendingInvitationResourcesRequest, ListPendingInvitationResourcesResponse } from "../models/models_0";
import {
  de_ListPendingInvitationResourcesCommand,
  se_ListPendingInvitationResourcesCommand,
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
 * The input for {@link ListPendingInvitationResourcesCommand}.
 */
export interface ListPendingInvitationResourcesCommandInput extends ListPendingInvitationResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListPendingInvitationResourcesCommand}.
 */
export interface ListPendingInvitationResourcesCommandOutput
  extends ListPendingInvitationResourcesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the resources in a resource share that is shared with you but for which the invitation is
 *             still <code>PENDING</code>. That means that you haven't accepted or rejected the
 *             invitation and the invitation hasn't expired.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPendingInvitationResourcesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPendingInvitationResourcesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // ListPendingInvitationResourcesRequest
 *   resourceShareInvitationArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   resourceRegionScope: "ALL" || "REGIONAL" || "GLOBAL",
 * };
 * const command = new ListPendingInvitationResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListPendingInvitationResourcesResponse
 * //   resources: [ // ResourceList
 * //     { // Resource
 * //       arn: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       resourceShareArn: "STRING_VALUE",
 * //       resourceGroupArn: "STRING_VALUE",
 * //       status: "AVAILABLE" || "ZONAL_RESOURCE_INACCESSIBLE" || "LIMIT_EXCEEDED" || "UNAVAILABLE" || "PENDING",
 * //       statusMessage: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       resourceRegionScope: "REGIONAL" || "GLOBAL",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPendingInvitationResourcesCommandInput - {@link ListPendingInvitationResourcesCommandInput}
 * @returns {@link ListPendingInvitationResourcesCommandOutput}
 * @see {@link ListPendingInvitationResourcesCommandInput} for command's `input` shape.
 * @see {@link ListPendingInvitationResourcesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
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
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>The operation failed because a required input parameter is missing.</p>
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
export class ListPendingInvitationResourcesCommand extends $Command
  .classBuilder<
    ListPendingInvitationResourcesCommandInput,
    ListPendingInvitationResourcesCommandOutput,
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
  .s("AmazonResourceSharing", "ListPendingInvitationResources", {})
  .n("RAMClient", "ListPendingInvitationResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListPendingInvitationResourcesCommand)
  .de(de_ListPendingInvitationResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPendingInvitationResourcesRequest;
      output: ListPendingInvitationResourcesResponse;
    };
    sdk: {
      input: ListPendingInvitationResourcesCommandInput;
      output: ListPendingInvitationResourcesCommandOutput;
    };
  };
}
