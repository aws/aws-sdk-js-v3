// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVPCAssociationAuthorizationsRequest, ListVPCAssociationAuthorizationsResponse } from "../models/models_0";
import {
  de_ListVPCAssociationAuthorizationsCommand,
  se_ListVPCAssociationAuthorizationsCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVPCAssociationAuthorizationsCommand}.
 */
export interface ListVPCAssociationAuthorizationsCommandInput extends ListVPCAssociationAuthorizationsRequest {}
/**
 * @public
 *
 * The output of {@link ListVPCAssociationAuthorizationsCommand}.
 */
export interface ListVPCAssociationAuthorizationsCommandOutput
  extends ListVPCAssociationAuthorizationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of the VPCs that were created by other accounts and that can be associated
 * 			with a specified hosted zone because you've submitted one or more
 * 				<code>CreateVPCAssociationAuthorization</code> requests. </p>
 *          <p>The response includes a <code>VPCs</code> element with a <code>VPC</code> child
 * 			element for each VPC that can be associated with the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListVPCAssociationAuthorizationsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListVPCAssociationAuthorizationsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListVPCAssociationAuthorizationsRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListVPCAssociationAuthorizationsCommand(input);
 * const response = await client.send(command);
 * // { // ListVPCAssociationAuthorizationsResponse
 * //   HostedZoneId: "STRING_VALUE", // required
 * //   NextToken: "STRING_VALUE",
 * //   VPCs: [ // VPCs // required
 * //     { // VPC
 * //       VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7" || "ap-east-2" || "eu-isoe-west-1" || "ap-southeast-6",
 * //       VPCId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVPCAssociationAuthorizationsCommandInput - {@link ListVPCAssociationAuthorizationsCommandInput}
 * @returns {@link ListVPCAssociationAuthorizationsCommandOutput}
 * @see {@link ListVPCAssociationAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link ListVPCAssociationAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The value that you specified to get the second or subsequent page of results is
 * 			invalid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListVPCAssociationAuthorizationsCommand extends $Command
  .classBuilder<
    ListVPCAssociationAuthorizationsCommandInput,
    ListVPCAssociationAuthorizationsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "ListVPCAssociationAuthorizations", {})
  .n("Route53Client", "ListVPCAssociationAuthorizationsCommand")
  .f(void 0, void 0)
  .ser(se_ListVPCAssociationAuthorizationsCommand)
  .de(de_ListVPCAssociationAuthorizationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVPCAssociationAuthorizationsRequest;
      output: ListVPCAssociationAuthorizationsResponse;
    };
    sdk: {
      input: ListVPCAssociationAuthorizationsCommandInput;
      output: ListVPCAssociationAuthorizationsCommandOutput;
    };
  };
}
