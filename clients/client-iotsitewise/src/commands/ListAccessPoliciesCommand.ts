// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAccessPoliciesRequest, ListAccessPoliciesResponse } from "../models/models_0";
import { de_ListAccessPoliciesCommand, se_ListAccessPoliciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessPoliciesCommand}.
 */
export interface ListAccessPoliciesCommandInput extends ListAccessPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessPoliciesCommand}.
 */
export interface ListAccessPoliciesCommandOutput extends ListAccessPoliciesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center
 *       group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAccessPoliciesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAccessPoliciesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListAccessPoliciesRequest
 *   identityType: "USER" || "GROUP" || "IAM",
 *   identityId: "STRING_VALUE",
 *   resourceType: "PORTAL" || "PROJECT",
 *   resourceId: "STRING_VALUE",
 *   iamArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAccessPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessPoliciesResponse
 * //   accessPolicySummaries: [ // AccessPolicySummaries // required
 * //     { // AccessPolicySummary
 * //       id: "STRING_VALUE", // required
 * //       identity: { // Identity
 * //         user: { // UserIdentity
 * //           id: "STRING_VALUE", // required
 * //         },
 * //         group: { // GroupIdentity
 * //           id: "STRING_VALUE", // required
 * //         },
 * //         iamUser: { // IAMUserIdentity
 * //           arn: "STRING_VALUE", // required
 * //         },
 * //         iamRole: { // IAMRoleIdentity
 * //           arn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       resource: { // Resource
 * //         portal: { // PortalResource
 * //           id: "STRING_VALUE", // required
 * //         },
 * //         project: { // ProjectResource
 * //           id: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       permission: "ADMINISTRATOR" || "VIEWER", // required
 * //       creationDate: new Date("TIMESTAMP"),
 * //       lastUpdateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessPoliciesCommandInput - {@link ListAccessPoliciesCommandInput}
 * @returns {@link ListAccessPoliciesCommandOutput}
 * @see {@link ListAccessPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAccessPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 * @public
 */
export class ListAccessPoliciesCommand extends $Command
  .classBuilder<
    ListAccessPoliciesCommandInput,
    ListAccessPoliciesCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "ListAccessPolicies", {})
  .n("IoTSiteWiseClient", "ListAccessPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListAccessPoliciesCommand)
  .de(de_ListAccessPoliciesCommand)
  .build() {}
