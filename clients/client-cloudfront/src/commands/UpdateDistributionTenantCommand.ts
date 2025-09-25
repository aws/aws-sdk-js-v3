// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDistributionTenantRequest, UpdateDistributionTenantResult } from "../models/models_2";
import { UpdateDistributionTenant } from "../schemas/schemas_11_Distribution";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDistributionTenantCommand}.
 */
export interface UpdateDistributionTenantCommandInput extends UpdateDistributionTenantRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDistributionTenantCommand}.
 */
export interface UpdateDistributionTenantCommandOutput extends UpdateDistributionTenantResult, __MetadataBearer {}

/**
 * <p>Updates a distribution tenant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateDistributionTenantCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateDistributionTenantCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateDistributionTenantRequest
 *   Id: "STRING_VALUE", // required
 *   DistributionId: "STRING_VALUE",
 *   Domains: [ // DomainList
 *     { // DomainItem
 *       Domain: "STRING_VALUE", // required
 *     },
 *   ],
 *   Customizations: { // Customizations
 *     WebAcl: { // WebAclCustomization
 *       Action: "override" || "disable", // required
 *       Arn: "STRING_VALUE",
 *     },
 *     Certificate: { // Certificate
 *       Arn: "STRING_VALUE", // required
 *     },
 *     GeoRestrictions: { // GeoRestrictionCustomization
 *       RestrictionType: "blacklist" || "whitelist" || "none", // required
 *       Locations: [ // LocationList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   Parameters: [ // Parameters
 *     { // Parameter
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ConnectionGroupId: "STRING_VALUE",
 *   IfMatch: "STRING_VALUE", // required
 *   ManagedCertificateRequest: { // ManagedCertificateRequest
 *     ValidationTokenHost: "cloudfront" || "self-hosted", // required
 *     PrimaryDomainName: "STRING_VALUE",
 *     CertificateTransparencyLoggingPreference: "enabled" || "disabled",
 *   },
 *   Enabled: true || false,
 * };
 * const command = new UpdateDistributionTenantCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDistributionTenantResult
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
 * @param UpdateDistributionTenantCommandInput - {@link UpdateDistributionTenantCommandInput}
 * @returns {@link UpdateDistributionTenantCommandOutput}
 * @see {@link UpdateDistributionTenantCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionTenantCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CNAMEAlreadyExists} (client fault)
 *  <p>The CNAME specified is already defined for CloudFront.</p>
 *
 * @throws {@link EntityAlreadyExists} (client fault)
 *  <p>The entity already exists. You must provide a unique entity.</p>
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *  <p>The entity limit has been exceeded.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidAssociation} (client fault)
 *  <p>The specified CloudFront resource can't be associated.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class UpdateDistributionTenantCommand extends $Command
  .classBuilder<
    UpdateDistributionTenantCommandInput,
    UpdateDistributionTenantCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "UpdateDistributionTenant", {})
  .n("CloudFrontClient", "UpdateDistributionTenantCommand")
  .sc(UpdateDistributionTenant)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDistributionTenantRequest;
      output: UpdateDistributionTenantResult;
    };
    sdk: {
      input: UpdateDistributionTenantCommandInput;
      output: UpdateDistributionTenantCommandOutput;
    };
  };
}
