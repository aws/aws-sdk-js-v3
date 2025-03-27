// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListHostedZonesByVPCRequest, ListHostedZonesByVPCResponse } from "../models/models_0";
import { de_ListHostedZonesByVPCCommand, se_ListHostedZonesByVPCCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHostedZonesByVPCCommand}.
 */
export interface ListHostedZonesByVPCCommandInput extends ListHostedZonesByVPCRequest {}
/**
 * @public
 *
 * The output of {@link ListHostedZonesByVPCCommand}.
 */
export interface ListHostedZonesByVPCCommandOutput extends ListHostedZonesByVPCResponse, __MetadataBearer {}

/**
 * <p>Lists all the private hosted zones that a specified VPC is associated with, regardless
 * 			of which Amazon Web Services account or Amazon Web Services service owns the hosted zones.
 * 			The <code>HostedZoneOwner</code> structure in the response contains one of the following
 * 			values:</p>
 *          <ul>
 *             <li>
 *                <p>An <code>OwningAccount</code> element, which contains the account number of
 * 					either the current Amazon Web Services account or another Amazon Web Services account. Some services, such as Cloud Map, create
 * 					hosted zones using the current account. </p>
 *             </li>
 *             <li>
 *                <p>An <code>OwningService</code> element, which identifies the Amazon Web Services
 * 					service that created and owns the hosted zone. For example, if a hosted zone was
 * 					created by Amazon Elastic File System (Amazon EFS), the value of
 * 						<code>Owner</code> is <code>efs.amazonaws.com</code>. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>ListHostedZonesByVPC</code> returns the hosted zones associated with the specified VPC and does not reflect the hosted zone
 * 			associations to VPCs via Route 53 Profiles. To get the associations to a Profile, call the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_ListProfileResourceAssociations.html">ListProfileResourceAssociations</a> API.</p>
 *          <note>
 *             <p>When listing private hosted zones, the hosted zone and the Amazon VPC must
 * 				belong to the same partition where the hosted zones were created. A partition is a
 * 				group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to
 * 				one partition.</p>
 *             <p>The following are the supported partitions:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>aws</code> - Amazon Web Services Regions</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>aws-cn</code> - China Regions</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p>
 *                </li>
 *             </ul>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a>
 * 				in the <i>Amazon Web Services General Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesByVPCCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesByVPCCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListHostedZonesByVPCRequest
 *   VPCId: "STRING_VALUE", // required
 *   VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7", // required
 *   MaxItems: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHostedZonesByVPCCommand(input);
 * const response = await client.send(command);
 * // { // ListHostedZonesByVPCResponse
 * //   HostedZoneSummaries: [ // HostedZoneSummaries // required
 * //     { // HostedZoneSummary
 * //       HostedZoneId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Owner: { // HostedZoneOwner
 * //         OwningAccount: "STRING_VALUE",
 * //         OwningService: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   MaxItems: Number("int"), // required
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHostedZonesByVPCCommandInput - {@link ListHostedZonesByVPCCommandInput}
 * @returns {@link ListHostedZonesByVPCCommandOutput}
 * @see {@link ListHostedZonesByVPCCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesByVPCCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The value that you specified to get the second or subsequent page of results is
 * 			invalid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListHostedZonesByVPCCommand extends $Command
  .classBuilder<
    ListHostedZonesByVPCCommandInput,
    ListHostedZonesByVPCCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDnsV20130401", "ListHostedZonesByVPC", {})
  .n("Route53Client", "ListHostedZonesByVPCCommand")
  .f(void 0, void 0)
  .ser(se_ListHostedZonesByVPCCommand)
  .de(de_ListHostedZonesByVPCCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHostedZonesByVPCRequest;
      output: ListHostedZonesByVPCResponse;
    };
    sdk: {
      input: ListHostedZonesByVPCCommandInput;
      output: ListHostedZonesByVPCCommandOutput;
    };
  };
}
