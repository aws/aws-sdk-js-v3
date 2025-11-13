// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDistributionTenantRequest, GetDistributionTenantResult } from "../models/models_1";
import { GetDistributionTenant } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDistributionTenantCommand}.
 */
export interface GetDistributionTenantCommandInput extends GetDistributionTenantRequest {}
/**
 * @public
 *
 * The output of {@link GetDistributionTenantCommand}.
 */
export interface GetDistributionTenantCommandOutput extends GetDistributionTenantResult, __MetadataBearer {}

/**
 * <p>Gets information about a distribution tenant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetDistributionTenantCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetDistributionTenantCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetDistributionTenantRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDistributionTenantCommand(input);
 * const response = await client.send(command);
 * // { // GetDistributionTenantResult
 * //   DistributionTenant: { // DistributionTenant
 * //     Id: "STRING_VALUE",
 * //     DistributionId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Domains: [ // DomainResultList
 * //       { // DomainResult
 * //         Domain: "STRING_VALUE", // required
 * //         Status: "active" || "inactive",
 * //       },
 * //     ],
 * //     Tags: { // Tags
 * //       Items: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Customizations: { // Customizations
 * //       WebAcl: { // WebAclCustomization
 * //         Action: "override" || "disable", // required
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       Certificate: { // Certificate
 * //         Arn: "STRING_VALUE", // required
 * //       },
 * //       GeoRestrictions: { // GeoRestrictionCustomization
 * //         RestrictionType: "blacklist" || "whitelist" || "none", // required
 * //         Locations: [ // LocationList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     Parameters: [ // Parameters
 * //       { // Parameter
 * //         Name: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ConnectionGroupId: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     Enabled: true || false,
 * //     Status: "STRING_VALUE",
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDistributionTenantCommandInput - {@link GetDistributionTenantCommandInput}
 * @returns {@link GetDistributionTenantCommandOutput}
 * @see {@link GetDistributionTenantCommandInput} for command's `input` shape.
 * @see {@link GetDistributionTenantCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetDistributionTenantCommand extends $Command
  .classBuilder<
    GetDistributionTenantCommandInput,
    GetDistributionTenantCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetDistributionTenant", {})
  .n("CloudFrontClient", "GetDistributionTenantCommand")
  .sc(GetDistributionTenant)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDistributionTenantRequest;
      output: GetDistributionTenantResult;
    };
    sdk: {
      input: GetDistributionTenantCommandInput;
      output: GetDistributionTenantCommandOutput;
    };
  };
}
