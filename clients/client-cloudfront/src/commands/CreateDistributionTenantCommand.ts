// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDistributionTenantRequest, CreateDistributionTenantResult } from "../models/models_0";
import { de_CreateDistributionTenantCommand, se_CreateDistributionTenantCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDistributionTenantCommand}.
 */
export interface CreateDistributionTenantCommandInput extends CreateDistributionTenantRequest {}
/**
 * @public
 *
 * The output of {@link CreateDistributionTenantCommand}.
 */
export interface CreateDistributionTenantCommandOutput extends CreateDistributionTenantResult, __MetadataBearer {}

/**
 * <p>Creates a distribution tenant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateDistributionTenantCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateDistributionTenantCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateDistributionTenantRequest
 *   DistributionId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Domains: [ // DomainList // required
 *     { // DomainItem
 *       Domain: "STRING_VALUE", // required
 *     },
 *   ],
 *   Tags: { // Tags
 *     Items: [ // TagList
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *   },
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
 *   ManagedCertificateRequest: { // ManagedCertificateRequest
 *     ValidationTokenHost: "cloudfront" || "self-hosted", // required
 *     PrimaryDomainName: "STRING_VALUE",
 *     CertificateTransparencyLoggingPreference: "enabled" || "disabled",
 *   },
 *   Enabled: true || false,
 * };
 * const command = new CreateDistributionTenantCommand(input);
 * const response = await client.send(command);
 * // { // CreateDistributionTenantResult
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
 * @param CreateDistributionTenantCommandInput - {@link CreateDistributionTenantCommandInput}
 * @returns {@link CreateDistributionTenantCommandOutput}
 * @see {@link CreateDistributionTenantCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionTenantCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTagging} (client fault)
 *  <p>The tagging specified is not valid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreateDistributionTenantCommand extends $Command
  .classBuilder<
    CreateDistributionTenantCommandInput,
    CreateDistributionTenantCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "CreateDistributionTenant", {})
  .n("CloudFrontClient", "CreateDistributionTenantCommand")
  .f(void 0, void 0)
  .ser(se_CreateDistributionTenantCommand)
  .de(de_CreateDistributionTenantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDistributionTenantRequest;
      output: CreateDistributionTenantResult;
    };
    sdk: {
      input: CreateDistributionTenantCommandInput;
      output: CreateDistributionTenantCommandOutput;
    };
  };
}
